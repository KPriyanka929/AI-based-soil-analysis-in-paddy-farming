import os
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np

# -------------------------
# 1️⃣ Paths and parameters
# -------------------------
model_path = r"C:\Users\Admin\Desktop\major project\backend\soil_cnn_model.h5"
test_path  = r"C:\Users\Admin\Downloads\soil\Dataset\test"

img_height, img_width = 128, 128
batch_size = 8

# -------------------------
# 2️⃣ Safe print function
# -------------------------
def safe_print(text):
    try:
        print(text)
    except UnicodeEncodeError:
        print(text.encode('utf-8'))

# -------------------------
# 3️⃣ Load trained model
# -------------------------
if not os.path.exists(model_path):
    safe_print(f"Model file not found at {model_path}")
    exit()

model = load_model(model_path)
safe_print("Model loaded successfully!")

# -------------------------
# 4️⃣ Prepare test data generator
# -------------------------
test_datagen = ImageDataGenerator(rescale=1./255)

test_generator = test_datagen.flow_from_directory(
    test_path,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode='categorical',
    shuffle=False
)

# -------------------------
# 5️⃣ Evaluate model on test set
# -------------------------
loss, accuracy = model.evaluate(test_generator, verbose=1)
safe_print(f"Test Loss: {loss:.4f}")
safe_print(f"Test Accuracy: {accuracy:.4f}")

# -------------------------
# 6️⃣ Predictions on test images
# -------------------------
pred_probs = model.predict(test_generator, verbose=1)
pred_classes = np.argmax(pred_probs, axis=1)

# Map class indices to class labels
class_labels = {v: k for k, v in test_generator.class_indices.items()}

# Print first 10 predictions
safe_print("\nSample Predictions:")
for i in range(10):
    safe_print(f"Image {test_generator.filenames[i]} -> Predicted: {class_labels[pred_classes[i]]}")

# -------------------------
# 7️⃣ Optional: Accuracy check
# -------------------------
true_classes = test_generator.classes
accuracy_manual = np.sum(pred_classes == true_classes) / len(true_classes)
safe_print(f"\nManual calculation of test accuracy: {accuracy_manual:.4f}")

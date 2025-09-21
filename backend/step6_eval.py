import os
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
from sklearn.metrics import confusion_matrix, classification_report
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator, load_img, img_to_array


# -------------------------
# 1️⃣ Paths
# -------------------------
test_path = r"C:\Users\Admin\Downloads\soil\Dataset\Test"

# -------------------------
# 2️⃣ Image parameters
# -------------------------
img_height, img_width = 128, 128
batch_size = 32

# -------------------------
# 3️⃣ Load fine-tuned model
# -------------------------
model = load_model("soil_cnn_model_finetuned.h5")
print("Model loaded successfully!")

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
# 5️⃣ Get class labels
# -------------------------
class_labels = {v: k for k, v in test_generator.class_indices.items()}
print("Class labels:", class_labels)
target_names = list(test_generator.class_indices.keys())

# -------------------------
# 6️⃣ Predict on test data
# -------------------------
pred_probs = model.predict(test_generator, verbose=1)
y_pred = np.argmax(pred_probs, axis=1)
y_true = test_generator.classes

# -------------------------
# 7️⃣ Classification Report
# -------------------------
print("\nClassification Report:\n")
print(classification_report(y_true, y_pred, target_names=target_names))

# -------------------------
# 8️⃣ Confusion Matrix
# -------------------------
cm = confusion_matrix(y_true, y_pred)
plt.figure(figsize=(8,6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
            xticklabels=target_names,
            yticklabels=target_names)
plt.xlabel("Predicted")
plt.ylabel("True")
plt.title("Confusion Matrix")
plt.show()

# -------------------------
# 9️⃣ Visualize first 20 predictions
# -------------------------
plt.figure(figsize=(12,8))
for i in range(20):
    img_path = test_generator.filepaths[i]
    img = load_img(img_path, target_size=(img_height, img_width))

    plt.subplot(4,5,i+1)
    plt.imshow(img)
    plt.axis("off")
    true_label = target_names[y_true[i]]
    pred_label = target_names[y_pred[i]]
    color = "green" if true_label == pred_label else "red"
    plt.title(pred_label, color=color, fontsize=10)
plt.tight_layout()
plt.show()

# -------------------------
# 🔟 Overall test accuracy
# -------------------------
acc = np.mean(y_pred == y_true)
print(f"\nManual Test Accuracy: {acc:.4f}")

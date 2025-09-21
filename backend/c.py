from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications.vgg16 import preprocess_input
import matplotlib.pyplot as plt
import numpy as np
import os

# Paths
model_path = r"C:\Users\Admin\Desktop\major project\backend\soil_cnn_model.h5"
test_dir = r"C:\Users\Admin\Downloads\soil\Dataset\test"

# Load model
model = load_model(model_path)

# Prepare test data
test_datagen = ImageDataGenerator(preprocessing_function=preprocess_input)
test_generator = test_datagen.flow_from_directory(
    test_dir,
    target_size=(128, 128),  # must match your original model's input
    batch_size=1,
    class_mode='categorical',
    shuffle=False
)

# Predict
predictions = model.predict(test_generator)
predicted_classes = np.argmax(predictions, axis=1)
true_classes = test_generator.classes
class_labels = list(test_generator.class_indices.keys())

# Show some images with predictions
# Show some images with predictions (corrected for display)
for i in range(10):
    img, label = test_generator[i]
    
    # Undo VGG16 preprocessing for visualization
    display_img = img[0] + [103.939, 116.779, 123.68]  # Add mean back
    display_img = display_img[..., ::-1]  # Convert BGR to RGB
    display_img = np.clip(display_img, 0, 255).astype('uint8')
    
    plt.imshow(display_img)
    plt.title(f"True: {class_labels[np.argmax(label[0])]} | Pred: {class_labels[predicted_classes[i]]}")
    plt.axis('off')
    plt.show()


import matplotlib.pyplot as plt
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Load model
model = load_model('soil_cnn_model.h5')
print("Model loaded successfully!")

# Prepare test data generator (update path to your test folder)
test_datagen = ImageDataGenerator(rescale=1./255)
test_generator = test_datagen.flow_from_directory(
    r'C:\Users\Admin\Downloads\soil\Dataset\test',  # change to your test folder
    target_size=(128, 128),  # match training size
    batch_size=32,
    class_mode='categorical',
    shuffle=False
)

# Map indices to class labels
class_labels = {v: k for k, v in test_generator.class_indices.items()}
print("Class labels:", class_labels)

# Predict on test images
preds = model.predict(test_generator, verbose=1)
y_pred = np.argmax(preds, axis=1)
y_true = test_generator.classes

# Classification report
target_names = list(test_generator.class_indices.keys())  # string class names
print("Classification Report:\n")
print(classification_report(y_true, y_pred, target_names=target_names))

# Confusion matrix
cm = confusion_matrix(y_true, y_pred)
plt.figure(figsize=(8,6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
            xticklabels=target_names,
            yticklabels=target_names)
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()

# Visualize first 20 test images with predictions
plt.figure(figsize=(12,8))
for i in range(20):
    plt.subplot(4,5,i+1)
    img = plt.imread(test_generator.filepaths[i])
    plt.imshow(img)
    plt.axis('off')
    true_label = target_names[y_true[i]]
    pred_label = target_names[y_pred[i]]
    color = 'green' if true_label == pred_label else 'red'
    plt.title(pred_label, color=color, fontsize=10)
plt.tight_layout()
plt.show()

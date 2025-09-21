import os
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.optimizers import Adam

# -------------------------
# 1️⃣ Paths
# -------------------------
train_dir = r"C:\Users\Admin\Downloads\soil\Dataset\Train"
test_dir  = r"C:\Users\Admin\Downloads\soil\Dataset\Test"

# -------------------------
# 2️⃣ Image parameters
# -------------------------
img_height, img_width = 128, 128
batch_size = 8

# -------------------------
# 3️⃣ Load pretrained model
# -------------------------
model = load_model("soil_cnn_model.h5")
print(" Model loaded successfully!")

# -------------------------
# 4️⃣ Setup data generators
# -------------------------
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True,
    vertical_flip=True,
    brightness_range=[0.8, 1.2],
    validation_split=0.2  # take 20% of training data for validation
)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode="categorical",
    subset="training",
    shuffle=True
)

val_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode="categorical",
    subset="validation",
    shuffle=False
)

# Test generator (no augmentation)
test_datagen = ImageDataGenerator(rescale=1./255)
test_generator = test_datagen.flow_from_directory(
    test_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode="categorical",
    shuffle=False
)

# -------------------------
# 5️⃣ Compile with smaller learning rate
# -------------------------
model.compile(
    optimizer=Adam(learning_rate=1e-5),
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

# -------------------------
# 6️⃣ Fine-tune the model
# -------------------------
history = model.fit(
    train_generator,
    validation_data=val_generator,
    epochs=10
)

# -------------------------
# 7️⃣ Save improved model
# -------------------------
model.save("soil_cnn_model_finetuned.h5")
print(" Fine-tuned model saved as soil_cnn_model_finetuned.h5")

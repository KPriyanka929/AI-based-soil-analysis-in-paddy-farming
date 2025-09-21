import os
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.optimizers import Adam

# -------------------------
# 1️⃣ Paths to dataset
# -------------------------
train_path = r"C:\Users\Admin\Downloads\soil\Dataset\Train"
test_path  = r"C:\Users\Admin\Downloads\soil\Dataset\Test"

print("Train path exists?", os.path.exists(train_path))
print("Test path exists?", os.path.exists(test_path))

# -------------------------
# 2️⃣ Image parameters
# -------------------------
img_height, img_width = 128, 128
batch_size = 8

# -------------------------
# 3️⃣ Training ImageDataGenerator with augmentation
# -------------------------
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True,
    vertical_flip=True,
    brightness_range=[0.8, 1.2],
    validation_split=0.2
)

# -------------------------
# 4️⃣ Load training and validation data
# -------------------------
print(">>> Starting training generator...")
train_generator = train_datagen.flow_from_directory(
    train_path,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode='categorical',
    subset='training',
    shuffle=True
)
print(">>> Training generator created.")

print(">>> Starting validation generator...")
validation_generator = train_datagen.flow_from_directory(
    train_path,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode='categorical',
    subset='validation',
    shuffle=False
)
print(">>> Validation generator created.")

# -------------------------
# 5️⃣ Load test data
# -------------------------
print(">>> Starting test generator...")
test_datagen = ImageDataGenerator(rescale=1./255)
test_generator = test_datagen.flow_from_directory(
    test_path,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode='categorical',
    shuffle=False
)
print(">>> Test generator created.")

# -------------------------
# 6️⃣ Check class mapping
# -------------------------
print("Class mapping:", train_generator.class_indices)
num_classes = len(train_generator.class_indices)

# -------------------------
# 7️⃣ Build CNN model
# -------------------------
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(img_height, img_width, 3)),
    MaxPooling2D((2, 2)),

    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),

    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),

    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(num_classes, activation='softmax')
])

# -------------------------
# 8️⃣ Compile model
# -------------------------
model.compile(optimizer=Adam(learning_rate=0.001),
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# -------------------------
# 9️⃣ Train model
# -------------------------
history = model.fit(
    train_generator,
    validation_data=validation_generator,
    epochs=10
)

# -------------------------
# 🔟 Save trained model
# -------------------------
model.save(r"C:\Users\Admin\Desktop\major project\backend\soil_cnn_model.h5")
print(" Model trained and saved successfully!")

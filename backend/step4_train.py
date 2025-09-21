import tensorflow as tf
from step2_preprocess import train_generator, validation_generator
from step3_model import model  # your CNN model

# -------------------------
# 1️⃣ Training parameters
# -------------------------
epochs = 15  # number of times the model will see the entire dataset
batch_size = 32

# -------------------------
# 2️⃣ Train the model
# -------------------------
history = model.fit(
    train_generator,
    validation_data=validation_generator,
    epochs=epochs,
    verbose=1
)

# -------------------------
# 3️⃣ Save the trained model
# -------------------------
model.save("soil_cnn_model.h5")
print("Model trained and saved as 'soil_cnn_model.h5'")

from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # allow frontend to call this API

# Load model once when server starts
model = load_model("soil_cnn_model_finetuned.h5")
img_height, img_width = 128, 128
class_labels = {0: 'Alluvial soil', 1: 'Black Soil', 2: 'Clay soil', 3: 'Red soil'}

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    
    file = request.files["image"]
    
    # Save temporarily
    file_path = os.path.join("temp", file.filename)
    os.makedirs("temp", exist_ok=True)
    file.save(file_path)
    
    # Process image
    img = load_img(file_path, target_size=(img_height, img_width))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    
    # Predict
    preds = model.predict(img_array)
    class_index = np.argmax(preds, axis=1)[0]
    predicted_label = class_labels[class_index]
    
    # Clean up temp file
    os.remove(file_path)
    
    return jsonify({"prediction": predicted_label})

if __name__ == "__main__":
    app.run(debug=True, port=5000)

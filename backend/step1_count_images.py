cimport os

# Full path to your Train folder
dataset_path = r"C:\Users\Admin\Downloads\soil\Dataset\Train"

# Correct folder names as in your Train folder
classes = ['Alluvial soil', 'Black soil', 'Clay soil', 'Red soil']

# Count images in each class
for cls in classes:
    class_path = os.path.join(dataset_path, cls)
    if os.path.exists(class_path):
        num_images = len([f for f in os.listdir(class_path) if f.endswith(('.jpg', '.png'))])
        print(f"{cls}: {num_images} images")
    else:
        print(f"Folder not found: {class_path}")

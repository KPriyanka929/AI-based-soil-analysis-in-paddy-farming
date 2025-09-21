import pandas as pd
import numpy as np
import os
print(os.getcwd())
print(os.path.exists(r"C:\Users\Admin\Desktop\major project\cropdataset.csv"))

# Check if the CSV file exists
print(os.path.exists(r"C:\Users\Admin\Desktop\major project\cropdataset.csv"))

# Load your dataset
df = pd.read_csv(r"C:\Users\Admin\Desktop\major project\cropdataset.csv")

# Filter rice/paddy records
rice_df = df[df['Crop'].str.lower() == 'paddy'].copy()

# Define compatible crops to augment data
compatible_crops = ['Turmeric', 'Ginger', 'Moong', 'Urad','Sugarcane','Wheat','Maize','Soybean']

# Filter compatible crops
augment_df = df[df['Crop'].isin(compatible_crops)].copy()

# Adjust features to match rice/paddy ranges
for col in ['Nitrogen', 'Phosphorus', 'Potassium', 'pH', 'Rainfall', 'Temperature']:
    # Slight random variation within ±5% to make realistic
    augment_df[col] = augment_df[col] * (1 + np.random.uniform(-0.05, 0.05, len(augment_df)))

# Label all augmented crops as 'Paddy' for ML purposes
augment_df['Crop'] = 'Paddy'

# Combine original rice data + augmented data
final_df = pd.concat([rice_df, augment_df], ignore_index=True)

# Optional: shuffle the dataset
final_df = final_df.sample(frac=1).reset_index(drop=True)


# Check first few rows
print(final_df.head())

# Check for missing values
print(final_df.isnull().sum())

# Check data types
print(final_df.dtypes)

# Summary statistics
print(final_df.describe())
# Save to new CSV
final_df.to_csv("augmented_rice_dataset.csv", index=False)
print("Augmented rice dataset created with", len(final_df), "records.")

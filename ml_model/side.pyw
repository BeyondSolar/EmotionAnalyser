from tensorflow.keras.models import load_model
from tensorflow.keras.models import model_from_json
import json

# Load the model from the .h5 file
loaded_model = load_model('imageclassifier.h5')

# Convert the model to JSON format
model_json = loaded_model.to_json()

# Save the JSON model to a file
with open("imageclassifier.json", "w") as json_file:
    json_file.write(model_json)
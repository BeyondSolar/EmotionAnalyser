import tensorflow as tf
from tensorflow.keras.models import load_model

# Create or load your TensorFlow model
model = load_model('imageclassifier.h5')

# Save the model weights to a binary file
model.save_weights("model_weights.bin")
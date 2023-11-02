const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

// Load the model from the JSON file and its weights
const modelPath = 'path_to_model_directory/model.json';
const weightsPath = 'path_to_model_directory/model_weights.bin';

const model = fs.readFileSync(modelPath, 'utf8');
const weights = fs.readFileSync(weightsPath);

// Load the model architecture
const loadedModel = tf.loadLayersModel(
  tf.io.fromMemory(model, 'json'),
  tf.io.fromMemory(weights),
);

// Make a sample prediction (you should replace this with your data)
//const input = tf.tensor("C:/Users/abhis/OneDrive/Desktop/EmotionAnalyser/upload/WIN_20221214_19_28_27_Pro.jpg");
const output = loadedModel.predict(input);

console.log('Prediction:', output.dataSync());



// You can process and send this prediction to your web page or API


module.exports={
  loadedModel,
}
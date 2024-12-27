const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/cancer-storage-predict/model.json');
}
module.exports = loadModel;
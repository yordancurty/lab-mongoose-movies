/*Create the Celebrity model with the schema.
Create the celebrity schema with name, occupation and catchPhrase.
Export the Celebrity model.*/

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String 
})


const CelebModel = mongoose.model('CelebModel', celebSchema);

module.exports = CelebModel










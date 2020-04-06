var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Date, required: false },
    editorial: { type: String, required: false },
    description: { type: String, required: false },
    author: [{ type: Schema.Types.ObjectId, ref: 'Author', require: false }],
    stock: { type: Number, required: false },
    reserved: { type: Boolean, required: false },
}, { collection: 'books' });

module.exports = mongoose.model('Book', booksSchema);
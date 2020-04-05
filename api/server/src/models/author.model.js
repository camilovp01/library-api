var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorsSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    book: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, { collection: 'authors' });

module.exports = mongoose.model('Author', authorsSchema);
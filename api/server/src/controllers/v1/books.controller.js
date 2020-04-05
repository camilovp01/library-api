var Book = require('../../models/book.model');


var getAllBooks = async () => {
    try {
        return await Book.find({}).populate('author', 'name');
    } catch (error) {
        return error;
    }
}


var addBook = async (body) => {
    try {
        var { title, year, editorial, description, author } = body;
        var book = new Book({
            title,
            year,
            editorial,
            description,
            author
        });
        return await book.save();
    } catch (error) {
        return error;
    }
}


var getBookById = async (id) => {
    try {
        return await Book.findById(id).populate('author', 'name');
    } catch (error) {
        return error;
    }
}


var updateBook = async (id, body) => {
    try {
        var { title, year, editorial, description, author } = body;
        var book = await getBookById(id);
        book.title = title;
        book.year = year;
        book.editorial = editorial;
        book.description = description;
        book.author = author;
        return await book.save();
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllBooks,
    addBook,
    getBookById,
    updateBook
}
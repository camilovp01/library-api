var Author = require('../../models/author.model');


var getAllAuthors = async () => {
    try {
        return await Author.find({}).populate('book', 'id title');
    } catch (error) {
        return error;
    }
}


var addAuthor = async (body) => {
    try {
        var { name, book } = body;
        var auth = new Author({
            name,
            book
        });
        return await auth.save();
    } catch (error) {
        return error;
    }
}


var getAuthorById = async (id) => {
    try {
        return await Author.findById(id).populate('book', 'title');
    } catch (error) {
        return error;
    }
}


var updateAuthor = async (id, body) => {
    try {
        var { name, book } = body;
        var author = await getAuthorById(id);
        author.name = name;
        author.book = book;
        return await author.save();
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllAuthors,
    addAuthor,
    getAuthorById,
    updateAuthor
}
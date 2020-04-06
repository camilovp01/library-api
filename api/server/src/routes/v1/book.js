var express = require('express');
var bookController = require('../../controllers/v1/books.controller')

var app = express();


app.get('/', async (req, res) => {

    var books = await bookController.getAllBooks();
    var total = books.length;
    res.status(200).json({
        message: 'OK',
        books,
        total,
        error: false
    });

});


app.get('/:id', async (req, res) => {

    var id = req.params.id;
    var book = await bookController.getBookById(id);
    res.status(200).json({
        message: 'OK',
        book,
        error: false
    });

});


app.post('/', async (req, res) => {

    var body = req.body;
    var book = await bookController.addBook(body);
    res.status(200).json({
        message: 'OK',
        book,
        error: false
    });

});


app.put('/:id', async (req, res) => {

    var id = req.params.id;
    var body = req.body;
    var book = await bookController.updateBook(id, body);
    res.status(200).json({
        message: 'OK',
        book,
        error: false
    });

});


module.exports = app
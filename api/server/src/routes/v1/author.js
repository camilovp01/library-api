var express = require('express');
var authorController = require('../../controllers/v1/author.controller')

var app = express();


app.get('/', async (req, res) => {

    var authors = await authorController.getAllAuthors();
    var total = authors.length;
    res.status(200).json({
        message: 'OK',
        authors,
        total,
        error: false
    });

});


app.get('/:id', async (req, res) => {

    var id = req.params.id;
    var author = await authorController.getAuthorById(id);
    res.status(200).json({
        message: 'OK',
        author,
        error: false
    });

});


app.post('/', async (req, res) => {

    var body = req.body;
    var author = await authorController.addAuthor(body);
    res.status(200).json({
        message: 'OK',
        author,
        error: false
    });

});


app.put('/:id', async (req, res) => {

    var id = req.params.id;
    var body = req.body;
    var book = await authorController.updateAuthor(id, body);
    res.status(200).json({
        message: 'OK',
        book,
        error: false
    });

});


module.exports = app
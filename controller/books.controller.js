const booksController = {}

const Book = require('../model/book.model');

booksController.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books)
}

booksController.getBook = async (req, res) => {
    const Id = req.params.id;
    const book = await Book.findById({ _id: Id }, (err, res) => {
        console.log("entro")
    })
    res.json(book)
}

booksController.createBook = async (req, res) => {
    const { historyId, title, description, history, idAuthor, author, anon, able } = req.query;
    const anonimus = anon == "false" ? false : true;
    try {
        const newBook = new Book({
            _id: historyId,
            title,
            description,
            history,
            idAuthor,
            author,
            anon: anonimus,
            able: able
        });
        await newBook.save();
        res.json({
            message: 'Historia creada correctamente',
            status: "ok"
        })
    } catch (e) {
        res.status(404).json({
            message: "Something is wrong"
        })
        console.log(e)
    }
}
module.exports = booksController;
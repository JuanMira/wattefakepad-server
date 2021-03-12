const bookCtrl = {}
const Book = require('../model/book.model');

bookCtrl.getBook = async (req, res) => {
    const { userId } = req.query;
    const myBook = await Book.find({ idAuthor: userId });
    res.json(myBook)
}

module.exports = bookCtrl;
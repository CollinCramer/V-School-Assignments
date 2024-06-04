const express = require("express")
const booksRouter = express.Router()
const Author = require('../models/AuthorModel.js')
const Books = require('../models/BooksModel.js')

// // get all
booksRouter.get("/", (req, res, next) => {
    Books.find((err, book) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book)
    })
})

// get one
booksRouter.get("/:bookId", (req,res, next) => {
    Books.findOne({ _id: req.params.bookId }, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    }) 
})

// post one
booksRouter.post("/:authorId",(req, res, next) => {
    req.body.author = req.params.authorId
   const newBook = new Books(req.body)
   newBook.save((err, savedBook) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedBook)
   })
})

// get by author Id. NOT WORKING YET

booksRouter.get('/:authorID', (req, res, next) => {
    Books.find({ author: req.params.authorID }, (err, book) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book)
    });
    console.log(Books)
});

// delete one item

booksRouter.delete("/:booksId", (req,res, next) => {
    Books.findOneAndDelete({ _id: req.params.booksId }, (err, deletedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedBook.name} from the Database`)
    }) 
})

// edit a post

booksRouter.put("/:booksId", (req,res, next) => {
   Books.findOneAndUpdate(
    // find this one and update
    { _id: req.params.booksId},
    // what to update it with as second argument
    req.body,
    // telling it to send back the updated version
    { new: true },
    (err, updatedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBook)
    })
   
})

// get by filtered type

booksRouter.get("/search/authorId", (req, res, next) => {
    Books.find({authorId: req.query.autthorId}, (err, book) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book)
    })
})



module.exports = booksRouter
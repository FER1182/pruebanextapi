import { books } from "../../../data";

export default (req, res) => {
   switch (req.method){
    case "GET":
        getBook(req,res)
        break
    case "DELETE":
        deletBook(req,res)
        break
    case "GET":
        updateBook(req,res)
        break        
   }

};

const getBook = (req,res)=>{
    const bookId = req.query.bookId;
    const book = books.find((book) => book.id === parseInt(bookId));
    if (!book)
      res.status(404).json({ message: `Book with id: ${bookId} not found` });
    res.status(200).json(book);
}

const deletBook = (req, res) => {
  const bookId = req.query.bookId;
  const index = books.findIndex((book) => book.id == bookId);
  books.splice(index,1)
  res.status(200).json({message:`book whit id: ${bookId} deleted`})
};

const updateBook = (req,res)=>{
    const bookId = req.query.bookId;
    const book = books.find((book) => book.id !== parseInt(bookId));
    if (!book)
      res.status(404).json({ message: `Book with id: ${bookId} not found` });
    const {title,author} = req.body
    book.title= title
    book.author= author
    res.status(200).json(book)
}
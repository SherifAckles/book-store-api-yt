const express = require("express");
const app = express();

const port = 3000; // Use the default port 3000

const books = [
  {
    id: 1,
    title: "Animal Farm",
    price: 8.99,
    cover:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781839642395/animal-farm-9781839642395_hr.jpg",
  },
  {
    id: 2,
    title: "Brave New World",
    price: 11.99,
    cover:
      "https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "1984",
    price: 9.99,
    cover:
      "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg?resize=500%2C815&ssl=1",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    price: 7.99,
    cover:
      "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    price: 10.99,
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
  },
  {
    id: 6,
    title: "The Great Gatsby",
    price: 8.99,
    cover:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780743273565/the-great-gatsby-9780743273565_hr.jpg",
  },
  {
    id: 7,
    title: "One Hundred Years of Solitude",
    price: 12.99,
    cover:
      "https://m.media-amazon.com/images/I/81MI6+TpYkL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 8,
    title: "The Alchemist",
    price: 9.99,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
/// Set CSP header to allow loading font from specified URL
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src 'self' https://books-store-api-yt.onrender.com/"
  );
  next();
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
import express from "express";
import bookController from "../controller/book-controller";

const routes = express.Router();

routes.get("/books", (request, response) => {
  bookController.readBook(request, response);
});

routes.post("/books", (request, response) => {
  bookController.createBook(request, response);
});

routes.put("/books/:id", (request, response) => {
  bookController.updateBook(request, response);
});

routes.delete("/books/:id", (request, response) => {
  bookController.removeBook(request, response);
});

export default routes;

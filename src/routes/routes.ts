import { Router } from "express";
import bookService from "../services/book-service";

const routes = Router();

routes.get("/books", async (request, response) => {
  const books = await bookService.read();
  return response.json(books);
});

routes.post("/books", async (request, response) => {
  const newBook = await bookService.create(request.body);
  return response.status(201).json(newBook);
});

routes.put("/books/:id", async (request, response) => {
  const updatedBook = await bookService.update(request.body, request.params.id);
  return response.json(updatedBook);
});

routes.delete("/books/:id", async (request, response) => {
  const removedBook = await bookService.remove(request.params.id);
  return response.json(removedBook);
});

export default routes;

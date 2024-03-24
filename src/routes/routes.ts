import express from "express";
import bookController from "../controller/book-controller";

const routes = express.Router();

routes.get("/books", (request, response) => {
  bookController.readBook(request, response);
});

routes.post("/books", async (request, response) => {
  await bookController.createBook(request, response);
});

routes.put("/books/:id", async (request, response) => {
  await bookController.updateBook(request, response);
});

routes.delete("/books/:id", async (request, response) => {
  await bookController.removeBook(request, response);
});

export default routes;

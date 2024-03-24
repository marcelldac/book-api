import { Router } from "express";
import bookController from "../controller/book-controller";

const routes = Router();

routes.get("/books", async (request, response) => {
  await bookController.readBook(request, response);
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

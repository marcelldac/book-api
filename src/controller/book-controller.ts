//Controller é a camada das requisições e responses (req, res)

import { Request, Response } from "express";
import bookService from "../services/book-service";

export const readBook = async (request: Request, response: Response) => {
  const books = await bookService.read();
  return response.json(books);
};

export const createBook = async (request: Request, response: Response) => {
  const newBook = await bookService.create(request.body);
  return response.status(201).json(newBook);
};
export const updateBook = async (request: Request, response: Response) => {
  const updatedBook = await bookService.update(request.body, request.params.id);
  return response.json(updatedBook);
};
export const removeBook = async (request: Request, response: Response) => {
  const removedBook = await bookService.remove(request.params.id);
  return response.json(removedBook);
};

const bookController = {
  readBook,
  createBook,
  updateBook,
  removeBook,
};

export default bookController;

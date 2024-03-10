import { Router } from "express";
import prismaClient from "../../prisma/prisma-client";

const routes = Router();

routes.get("/books", async (request, response) => {
  try {
    const books = await prismaClient.book.findMany();
    return response.status(200).json(books);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
});

//Create Books
routes.post("/books", async (request, response) => {
  try {
    const { name, synopsis, value, genders } = request.body;
    const newBook = await prismaClient.book.create({
      data: {
        name,
        synopsis,
        value,
        genders,
      },
    });
    //201 = created
    return response.status(201).json(newBook);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
});

routes.put("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, synopsis, value, genders } = request.body;

    const updateBook = await prismaClient.book.update({
      data: { name, synopsis, value, genders },
      where: { id },
    });

    return response.status(200).json(updateBook);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
});

routes.delete("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;

    await prismaClient.book.delete({
      where: { id },
    });

    //204 => no content (sem conteúdo)
    return response.sendStatus(204);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
});

export default routes;

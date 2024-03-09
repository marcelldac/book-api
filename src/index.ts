import express from "express";
import cors from "cors";
import prismaClient from "../prisma/prisma-client";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//create , read , update , delete
//CRUD
// catch toda vez com status 500(Internal server error)

// delete => 204 (no content)

//Read Books
app.get("/books", async (request, response) => {
  try {
    const books = await prismaClient.book.findMany();
    return response.status(200).json(books);
  } catch (error) {
    return response.status(500).json({ mesage: error, error: true });
  }
});

//Create Books
app.post("/books", async (request, response) => {
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
    return response.status(500).json({ mesage: error, error: true });
  }
});

app.put("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, synopsis, value, genders } = request.body;

    const updateBook = await prismaClient.book.update({
      data: { name, synopsis, value, genders },
      where: { id },
    });

    return response.status(200).json(updateBook);
  } catch (error) {
    return response.status(500).json({ mesage: error, error: true });
  }
});

app.delete("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;

    await prismaClient.book.delete({
      where: { id },
    });

    //204 => no content (sem conteúdo)
    return response.sendStatus(204);
  } catch (error) {
    return response.status(500).json({ mesage: error, error: true });
  }
});

app.listen(PORT, function () {
  console.log(`Servidor Online! Porta: ${PORT}`);
});

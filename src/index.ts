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
  const books = await prismaClient.book.findMany();
  return response.status(200).json(books);
})

//Create Books
app.post("/books", async (request, response) => {
  const { name, synopsis, value, genders } = request.body;
  const newBook = await prismaClient.book.create({
    data:{
      name,
      synopsis,
      value,
      genders
    }
  });
  //201 = created
  return response.status(201).json(newBook);
})


app.listen(PORT, function () {
  console.log(`Servidor Online! Porta: ${PORT}`);
});

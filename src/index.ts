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


app.listen(PORT, function () {
  console.log(`Servidor Online! Porta: ${PORT}`);
});

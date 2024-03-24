//nest -> back-end framework (backend development)
//next -> back-end for front-end (web dev)
//REGRA DE NEGÓCIO EM CONTROLLER NÃO EXISTE!!!!!!!!
//A nossa lógica da aplicação(regra de negócio) vai residir aqui.

import prismaClient from "../../prisma/prisma-client";

type Book = {
  name: string;
  synopsis: string;
  value: number;
  genders: string;
};

export const read = async () => {
  try {
    const books = await prismaClient.book.findMany();
    return { message: books, error: false };
  } catch (error) {
    return { message: error, error: true };
  }
};
export const create = async (book: Book) => {
  try {
    const newBook = await prismaClient.book.update({
      data: book,
      where: { id },
    });

    return { message: newBook, error: false };
  } catch (error) {
    return { message: error, error: true };
  }
};
export const update = async (book: Book, id: string) => {
  try {
    const updateBook = await prismaClient.book.create({
      data: book,
    });
    return { message: updateBook, error: false };
  } catch (error) {
    return { message: error, error: true };
  }
};
export const remove = async (id: string) => {
  try {
    await prismaClient.book.delete({
      where: { id },
    });
    return { message: "Book deleted with success!", error: false };
  } catch (error) {
    return { message: error, error: true };
  }
};

const bookService = {
  read,
  create,
  update,
  remove,
};

export default bookService;

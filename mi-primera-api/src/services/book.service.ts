import { Book, CreateBookRequest, UpdateBookRequest } from "../types/book";
import prisma from "../config/prisma";
import { Categoria } from "../../generated/prisma";

export async function getAllBooks(): Promise<Book[]> {
  const books = await prisma.book.findMany({
    orderBy: { id: 'asc' },
  });  
  return books;
}

export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({ where: { id }});
  if (!book) {
    const error = new Error('Book not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook(data: CreateBookRequest): Promise<Book> {
  const created = await prisma.book.create({
    data: {
      title: data.title,
      autor: data.autor,
      categoria: data.categoria as "INFANTIL" | "FICCION" | "HISTORIA" | "CIENCIA",
      descripcion: data.descripcion,
      imagen: data.imagen,
    },
  });
  return created;
}

export async function updateBook(id: number, updateData: UpdateBookRequest): Promise<Book> {
  try {
    const updated = await prisma.book.update({
      where: { id },
      data: {
        ...(updateData.title !== undefined ? { title: updateData.title } : {}),
        ...(updateData.autor !== undefined ? { autor: updateData.autor } : {}),
        ...(updateData.categoria !== undefined
          ? { categoria: Categoria[updateData.categoria as keyof typeof Categoria] }
          : {}),
        ...(updateData.descripcion !== undefined ? { descripcion: updateData.descripcion } : {}),
        ...(updateData.imagen !== undefined ? { imagen: updateData.imagen } : {}),
      },
    });
    return updated;
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Book not found');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

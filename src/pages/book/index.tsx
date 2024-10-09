import { useState } from "react";

import { EyeOpenIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Heading } from "@radix-ui/themes";

import { TableGrid } from "../../components/table";
import { PageHeader } from "../../components/page-header";
import { DeleteDialog } from "../../components/delete-dialog";
import { BookForm } from "./components/book-form";

import { useBooksContext } from "../../context/book.context";
import { useBook } from "./hook/book-form.hook";
import { IBook } from "../../interfaces/IBook";
import { BookInformations } from "./components/book-informations";

export const Book = () => {
  const { books, removeBook } = useBooksContext();
  const { form, handleSubmit } = useBook();
  const { formState } = form

  const [dialogOpen, setDialogOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);
  const [bookToView, setBookToView] = useState<IBook | null>(null);

  const columns = ["ID", "Nome", "Autor", "Páginas", "Ações"];

  const onSubmit = async (data: any) => {
    const isValid = await form.trigger();

    if (isValid) {
      handleSubmit(data);
      setDialogOpen(false);
    }
  };

  const handleDeleteBook = () => {
    if (bookToDelete !== null) {
      removeBook(bookToDelete);
      setBookToDelete(null);
    }

    setDialogOpen(false);
  };

  return (
    <>
      <PageHeader>
        <Heading size="5">Livros</Heading>

        <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
          <Dialog.Trigger>
            <Button variant="outline" onClick={() => setDialogOpen(true)}>
              <PlusIcon />
              Adicionar
            </Button>
          </Dialog.Trigger>
          <Dialog.Content maxWidth="450px">
            <Dialog.Title>
              {bookToView ? "Detalhes do livro" : "Adicionar livro"}
            </Dialog.Title>
            <Dialog.Description size="2" mb="4">
              {bookToView ? "" : "Adicione um livro à sua coleção."}
            </Dialog.Description>

            {bookToView ? (
              <BookInformations book={bookToView} />
            ) : (
              <BookForm form={form} formState={formState} />
            )}

            {bookToView ? (
              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button
                    variant="outline"
                    color="gray"
                    onClick={() => {
                      setBookToView(null)
                      setDialogOpen(false)
                    }}
                  >
                    Fechar
                  </Button>
                </Dialog.Close>
              </Flex>
            ) : (
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button
                    variant="soft"
                    color="gray"
                    onClick={() => {
                      setBookToView(null)
                      setDialogOpen(false)
                    }}
                  >
                    Cancelar
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button onClick={form.handleSubmit(onSubmit)}>Salvar</Button>
                </Dialog.Close>
              </Flex>
            )}
          </Dialog.Content>
        </Dialog.Root>
      </PageHeader>

      <TableGrid
        columns={columns}
        rows={books.map((book) => {
          return [
            book.id,
            book.name,
            book.author_name,
            book.pages === "0" ? "-" : book.pages,
            <Flex gap="2">
              <Button
                variant="soft"
                color="blue"
                radius="large"
                size="1"
                onClick={() => {
                  setBookToView(book)
                  setDialogOpen(true)
                }}
              >
                <EyeOpenIcon />
              </Button>
              <Button
                variant="soft"
                color="crimson"
                radius="large"
                size="1"
                onClick={() => {
                  setBookToDelete(book.id);
                }}
              >
                <TrashIcon color="#DD4425" />
              </Button>
            </Flex>
          ];
        })}
      />

      <DeleteDialog
        open={!!bookToDelete}
        onOpenChange={() => setBookToDelete(null)}
        handleDelete={handleDeleteBook}
        deleteWhat="livro"
      />
    </>
  );
};

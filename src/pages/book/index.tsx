import {
  Button,
  Dialog,
  Flex,
  Heading,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";

import { TableGrid } from "../../components/table";
import { PageHeader } from "../../components/page-header";
import { useBooksContext } from "../../context/book.context";
import { useBook } from "./hook/book-form.hook";
import { useState } from "react";
import { DeleteDialog } from "../../components/delete-dialog";

export const Book = () => {
  const { books, removeBook } = useBooksContext();
  const { form, handleSubmit } = useBook();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);

  const columns = ["Id", "Nome", "Autor", "Páginas", "Ações"];

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
            <Dialog.Title>Adicionar livro</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Adicione um livro à sua coleção.
            </Dialog.Description>
            <Flex direction="column" gap="3">
              <Text as="div" size="2" mb="1" weight="bold">
                Nome
              </Text>
              <TextField.Root
                {...form.register("name")}
                placeholder="Digite o nome do livro"
              />
              {form.formState.errors.name && (
                <Text color="red" size="1">
                  {form.formState.errors.name.message}
                </Text>
              )}

              <Text as="div" size="2" mb="1" weight="bold">
                Autor
              </Text>
              <Select.Root size="2" {...form.register("author_id")}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="João Vitor Fogaça">
                      João Vitor Fogaça
                    </Select.Item>
                    <Select.Item value="João Eduardo Fogaça">
                      João Eduardo Fogaça
                    </Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
              {form.formState.errors.author_id && (
                <Text color="red" size="1">
                  {form.formState.errors.author_id.message}
                </Text>
              )}

              <Text as="div" size="2" mb="1" weight="bold">
                N° de páginas (opcional)
              </Text>
              <TextField.Root
                {...form.register("pages", { valueAsNumber: true })}
                placeholder="Digite o n° de páginas"
                type="number"
              />
              {form.formState.errors.pages && (
                <Text color="red" size="1">
                  {form.formState.errors.pages.message}
                </Text>
              )}
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button
                  variant="soft"
                  color="gray"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button onClick={form.handleSubmit(onSubmit)}>Salvar</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </PageHeader>

      <TableGrid
        columns={columns}
        rows={books.map((book) => {
          return [
            book.id,
            book.name,
            book.author_id,
            book.pages,
            <Flex gap="2">
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
              <Button variant="soft" color="indigo" radius="large" size="1">
                <Pencil1Icon color="#0588F0" />
              </Button>
            </Flex>,
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

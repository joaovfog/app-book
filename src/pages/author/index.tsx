import { useState } from "react"

import { EyeOpenIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import { Button, Dialog, Flex, Heading } from "@radix-ui/themes"

import { TableGrid } from "../../components/table"
import { PageHeader } from "../../components/page-header"
import { AuthorForm } from "./components/author-form"
import { DeleteDialog } from "../../components/delete-dialog"
import { AuthorInformations } from "./components/author-informations"

import { useAuthorsContext } from "../../context/author.context"
import { useAuthor } from "./hook/author-form.hook"
import { IAuthor } from "../../interfaces/IAuthor"

export const Author = () => {
    const { authors, removeAuthor } = useAuthorsContext();
    const { form, handleSubmit } = useAuthor();
    const { formState } = form

    const [dialogOpen, setDialogOpen] = useState(false);
    const [authorToDelete, setAuthorToDelete] = useState<number | null>(null);
    const [authorToView, setAuthorToView] = useState<IAuthor | null>(null);

    const columns = ['ID', 'Nome', 'E-mail', 'Ações']

    const onSubmit = async (data: any) => {
        const isValid = await form.trigger();

        if (isValid) {
            handleSubmit(data);
            setDialogOpen(false);
        }
    };

    const handleDeleteAuthor = () => {
        if (authorToDelete !== null) {
            removeAuthor(authorToDelete);
            setAuthorToDelete(null);
        }

        setDialogOpen(false);
    };

    return (
        <>
            <PageHeader>
                <Heading size="5">Autores</Heading>
                <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Trigger>
                        <Button variant="outline" onClick={() => setDialogOpen(true)}>
                            <PlusIcon />
                            Adicionar
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content maxWidth="450px">
                        <Dialog.Title>
                            {authorToView ? "Detalhes do autor" : "Adicionar autor"}
                        </Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                            {authorToView ? "" : "Adicione os dados do autor."}
                        </Dialog.Description>

                        {authorToView ? (
                            <AuthorInformations author={authorToView} />
                        ) : (
                            <AuthorForm form={form} formState={formState} />
                        )}

                        {authorToView ? (
                            <Flex gap="3" justify="end">
                                <Dialog.Close>
                                    <Button variant="outline" color="gray">
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
                                            setAuthorToView(null)
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
                rows={authors.map((author) => {
                    return [
                        author.id,
                        author.name,
                        author.email || '-',
                        <Flex gap="2">
                            <Button
                                variant="soft"
                                color="blue"
                                radius="large"
                                size="1"
                                onClick={() => {
                                    setAuthorToView(author)
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
                                    setAuthorToDelete(author.id);
                                }}
                            >
                                <TrashIcon color="#DD4425" />
                            </Button>
                        </Flex>
                    ];
                })}
            />

            <DeleteDialog
                open={!!authorToDelete}
                onOpenChange={() => setAuthorToDelete(null)}
                handleDelete={handleDeleteAuthor}
            />
        </>
    )
}
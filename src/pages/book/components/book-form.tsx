import { Flex, Select, Text, TextField } from "@radix-ui/themes"

import { useAuthorsContext } from "../../../context/author.context"

interface BookFormProps {
    form: any
    formState: any
}

export const BookForm = ({ form, formState }: BookFormProps) => {
    const { authors } = useAuthorsContext()

    return (
        <Flex direction="column" gap="3">
            <Text as="div" size="2" mb="1" weight="bold">
                Nome
            </Text>
            <TextField.Root
                {...form.register("name")}
                placeholder="Digite o nome do livro"
            />
            {formState.errors.name && (
                <Text color="red" size="1">
                    {formState.errors.name.message}
                </Text>
            )}

            <Text as="div" size="2" mb="1" weight="bold">
                Autor
            </Text>
            <Select.Root
                size="2"
                onValueChange={(value) => form.setValue("author_id", Number(value))}
            >
                <Select.Trigger placeholder="Selecione um autor" />
                <Select.Content>
                    <Select.Group>
                        {authors.map((author) => (
                            <Select.Item key={author.id} value={author.id.toString()}>
                                {author.name}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            {formState.errors.author_id && (
                <Text color="red" size="1">
                    {formState.errors.author_id.message}
                </Text>
            )}

            <Text as="div" size="2" mb="1" weight="bold">
                N° de páginas (opcional)
            </Text>
            <TextField.Root
                {...form.register("pages")}
                placeholder="Digite o n° de páginas"
                type="text"
            />
            {formState.errors.pages && (
                <Text color="red" size="1">
                    {formState.errors.pages.message}
                </Text>
            )}
        </Flex>
    )
}

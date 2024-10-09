import { Flex, Text, TextField } from "@radix-ui/themes"

interface AuthorFormProps {
    form: any
    formState: any
}

export const AuthorForm = ({ form, formState }: AuthorFormProps) => {
    return (
        <Flex direction="column" gap="3">
            <Text as="div" size="2" mb="1" weight="bold">
                Nome
            </Text>
            <TextField.Root
                {...form.register("name")}
                placeholder="Digite o nome do autor"
            />
            {formState.errors.name && (
                <Text color="red" size="1">
                    {formState.errors.name.message}
                </Text>
            )}

            <Text as="div" size="2" mb="1" weight="bold">
                E-mail (opcional)
            </Text>
            <TextField.Root
                {...form.register("email")}
                placeholder="Digite seu melhor e-mail"
            />
            {formState.errors.pages && (
                <Text color="red" size="1">
                    {formState.errors.pages.message}
                </Text>
            )}
        </Flex>
    )
}

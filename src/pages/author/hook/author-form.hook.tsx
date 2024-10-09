import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthorsContext } from "../../../context/author.context";
import { IAuthor } from "../../../interfaces/IAuthor";

const authorSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string(),
});

type AuthorFormData = z.infer<typeof authorSchema>;

export const useAuthor = () => {
    const { authors, addAuthor } = useAuthorsContext();

    const form = useForm<AuthorFormData>({
        resolver: zodResolver(authorSchema),
        defaultValues: {
            name: "",
        },
    });

    const handleSubmit = (data: AuthorFormData) => {
        const authorId = authors.length
            ? Math.max(...authors.map((author) => author.id)) + 1
            : 1;

        const authorToAdd: IAuthor = {
            ...data,
            id: authorId,
        };

        addAuthor(authorToAdd);
        form.reset();
    };

    return {
        form,
        handleSubmit,
    };
};

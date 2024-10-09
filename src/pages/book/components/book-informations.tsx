import { Blockquote, Flex, Text } from "@radix-ui/themes";

import { IBook } from "../../../interfaces/IBook";

interface BookInformationsProps {
    book: IBook
}

export const BookInformations = ({ book }: BookInformationsProps) => {
    return (
        <Flex direction="column" gap="3">
            <Blockquote>
                <Text
                    as="div"
                    size="2"
                    mb="1"
                    weight="bold"
                >
                    Nome: {book.name}
                </Text>
                <Text
                    as="div"
                    size="2"
                    mb="1"
                    weight="bold"
                >
                    Autor: {book.author_name}
                </Text>
                <Text
                    as="div"
                    size="2"
                    mb="1"
                    weight="bold"
                >
                    Páginas: {book.pages}
                </Text>
            </Blockquote>
        </Flex>
    )
}

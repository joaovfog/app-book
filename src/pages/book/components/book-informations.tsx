import { Blockquote, Flex, Text } from "@radix-ui/themes";

import { IBook } from "../../../interfaces/IBook";

interface BookInformationsProps {
    book: IBook
}

export const BookInformations = ({ book }: BookInformationsProps) => {
    return (
        <Flex direction="column" gap="3">
            <Blockquote>
                <Flex gap="1">
                    <Text
                        as="div"
                        size="2"
                        mb="1"
                        weight="bold"
                    >
                        Nome:
                    </Text>
                    <Text size="2">
                        {book.name}
                    </Text>
                </Flex>
                <Flex gap="1">
                    <Text
                        as="div"
                        size="2"
                        mb="1"
                        weight="bold"
                    >
                        Autor:
                    </Text>
                    <Text size="2">
                        {book.author_name}
                    </Text>
                </Flex>
                <Flex gap="1">
                    <Text
                        as="div"
                        size="2"
                        mb="1"
                        weight="bold"
                    >
                        Páginas:
                    </Text>
                    <Text size="2">
                        {book.pages === "0" ? "não informado" : book.pages}
                    </Text>
                </Flex>
            </Blockquote>
        </Flex>
    )
}

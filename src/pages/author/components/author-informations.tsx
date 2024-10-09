import { Blockquote, Flex, Text } from "@radix-ui/themes"

import { IAuthor } from "../../../interfaces/IAuthor"

interface AuthorInformationProps {
    author: IAuthor
}

export const AuthorInformations = ({ author }: AuthorInformationProps) => {
    return (
        <Flex direction="column" gap="3">
            <Blockquote>
                <Text
                    as="div"
                    size="2"
                    mb="1"
                    weight="bold"
                >
                    Nome: {author.name}
                </Text>
                <Text
                    as="div"
                    size="2"
                    mb="1"
                    weight="bold"
                >
                    E-mail: {author.email || 'não informado'}
                </Text>
            </Blockquote>
        </Flex>
    )
}
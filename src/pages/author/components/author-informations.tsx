import { Blockquote, Flex, Text } from "@radix-ui/themes"

import { IAuthor } from "../../../interfaces/IAuthor"

interface AuthorInformationProps {
    author: IAuthor
}

export const AuthorInformations = ({ author }: AuthorInformationProps) => {
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
                        {author.name}
                    </Text>
                </Flex>
                <Flex gap="1">
                    <Text
                        as="div"
                        size="2"
                        mb="1"
                        weight="bold"
                    >
                        E-mail:
                    </Text>
                    <Text size="2">
                        {author.email || 'não informado'}
                    </Text>
                </Flex>
            </Blockquote>
        </Flex>
    )
}
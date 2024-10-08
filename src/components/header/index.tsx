import { Button, Heading } from "@radix-ui/themes"
import { Container, Logo, NavLinksContainer } from "./styles"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation()

    const isBookPage = location.pathname === '/books'
    const isAuthorPage = location.pathname === '/authors'

    return (
        <Container>
            <Logo>
                <img src="/book.svg" alt="book-icon" width={50} height={50} />
                <Heading size="5" weight="medium">Biblioteca</Heading>
            </Logo>

            <NavLinksContainer>
                <Button asChild variant={isBookPage ? "solid" : "outline"}>
                    <Link to="/books">Livros</Link>
                </Button>
                <Button asChild variant={isAuthorPage ? "solid" : "outline"}>
                    <Link to="/authors">Autores</Link>
                </Button>
            </NavLinksContainer>
        </Container>
    )
}
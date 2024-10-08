import { Outlet } from "react-router-dom"

import { Container } from "@radix-ui/themes"

import { Header } from "../components/header"

export const Layout = () => {
    return (
        <Container size="2">
            <Header />
            <Outlet />
        </Container>
    )
}
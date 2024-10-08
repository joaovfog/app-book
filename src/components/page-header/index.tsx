import React from "react"
import { Container } from "./styles"

interface PageHeaderProps {
    children: React.ReactNode
}

export const PageHeader = ({ children }: PageHeaderProps) => {
    return <Container>{children}</Container>
}
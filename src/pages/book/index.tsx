import { Button, Heading } from "@radix-ui/themes"
import { TableGrid } from "../../components/table"
import { PageHeader } from "../../components/page-header"

export const Book = () => {
    const columns = ['Id', 'Nome', 'Autor', 'Páginas', 'Ações']

    return (
        <>
            <PageHeader>
                <Heading size="5">Livros</Heading>
                <Button variant="outline">Adicionar</Button>
            </PageHeader>
            <TableGrid columns={columns} rows={[]} />
        </>
    )
}
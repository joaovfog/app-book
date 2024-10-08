import { Button, Heading } from "@radix-ui/themes"

import { TableGrid } from "../../components/table"
import { PageHeader } from "../../components/page-header"

export const Author = () => {
    const columns = ['Id', 'Nome', 'E-mail', 'Ações']
    
    return (
        <>
            <PageHeader>
                <Heading size="5">Autores</Heading>
                <Button variant="outline">Adicionar</Button>
            </PageHeader>
            <TableGrid columns={columns} rows={[]} />
        </>
    )
}
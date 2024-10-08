import { Table } from "@radix-ui/themes"

interface TableGridProps {
    columns: string[]
    rows: Array<{ [key: string]: never }>
}

export const TableGrid = ({ columns, rows }: TableGridProps) => {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    {columns.map((column, index) => (
                        <Table.ColumnHeaderCell key={index}>{column}</Table.ColumnHeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows.map((row, rowIndex) => (
                    <Table.Row key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <Table.Cell key={colIndex}>{row[column]}</Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}
import { Flex, Heading, Table } from "@radix-ui/themes";

interface TableGridProps {
  columns: string[];
  rows: Array<{ [key: string]: any }>;
}

export const TableGrid = ({ columns, rows }: TableGridProps) => {
  return (
    <>
      <Table.Root size="1">
        <Table.Header>
          <Table.Row>
            {columns.map((column, index) => (
              <Table.ColumnHeaderCell key={index}>
                {column}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              {row.map((cell: any, cellIndex: number) => (
                <Table.Cell key={cellIndex}>{cell}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      {rows.length === 0 && (
        <Flex justify="center" mt="4">
          <Heading size="2" weight="regular">
            Não há dados a serem carregados...
          </Heading>
        </Flex>
      )}
    </>
  );
};

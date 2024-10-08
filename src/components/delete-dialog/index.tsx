import { Button, Dialog, Flex } from "@radix-ui/themes";

interface DeleteDialogProps {
  open: boolean;
  onOpenChange: (value: any) => void;
  handleDelete: () => void;
  deleteWhat?: string;
}

export const DeleteDialog = ({
  open,
  onOpenChange,
  handleDelete,
  deleteWhat,
}: DeleteDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={() => onOpenChange(null)}>
      <Dialog.Content maxWidth="400px">
        <Dialog.Title>Confirmação de exclusão</Dialog.Title>
        <Dialog.Description>
          Você tem certeza de que deseja excluir esse
          {deleteWhat === "livro" ? " livro" : " autor"}?
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              onClick={() => onOpenChange(null)}
            >
              Cancelar
            </Button>
          </Dialog.Close>
          <Button onClick={handleDelete}>Confirmar</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

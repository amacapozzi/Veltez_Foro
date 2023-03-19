import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Tag,
} from "@chakra-ui/react";
import { deleteUser } from "../utilities/deleteUser";
import { TableAdmin } from "./TableAdmin";

export function ModalDeleteUser({ id, username, onClose }) {
  const cancelRef = React.useRef();
  const { succes, error, handleDeleteUser } = deleteUser(id);

  if (succes) {
    setTimeout(() => {
      onClose();
    }, 1250);
  }

  return (
    <>
      <AlertDialog
        isOpen={true}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete user.
            </AlertDialogHeader>

            <AlertDialogBody>
             ¿Are you sure you want to delete the user <Tag>{username}</Tag>?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteUser} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { tokenCreate } from "../utilities/tokenCreate";

export const ModalCreateToken = ({ onClose }) => {
  const cancelRef = React.useRef();
  const { succes, error, handleCreateToken } = tokenCreate();

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
              Create token.
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Are you sure you want to create the token? This token will allow
              user access.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleCreateToken} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

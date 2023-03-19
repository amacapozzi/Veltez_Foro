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
import { banUser } from "../utilities/banUser";

export const ModalBanUser = ({ onClose, user }) => {
  const cancelRef = React.useRef();
  const { banned, bannedLoading, handleUserBan } = banUser({ user });

  if (banned) {
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
              Ban user.
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Are you sure you want to ban the user {user}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleUserBan} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

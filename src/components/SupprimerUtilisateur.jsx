import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function SupprimerUtilisateur() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button
        flex={1}
        onClick={onOpen}
        fontSize={"sm"}
        rounded={"full"}
        bg={"#2d62ec"}
        color={"white"}
        // boxShadow={
        //   "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        // }
        _hover={{
          bg: "#e2e8f0",
        }}
        _focus={{
          bg: "#e2e8f0",
        }}
      >
        Supprimer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Supprimer utilisateur
            </AlertDialogHeader>

            <AlertDialogBody
            //  width="fit-content" margin="auto"
             >Êtes-vous sûr?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Supprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default SupprimerUtilisateur;

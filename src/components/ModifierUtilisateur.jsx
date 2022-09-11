import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  Box,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import React from "react";

export default function ModifierUtilisateur({ utilisateurs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        _focus={{
          bg: "gray.200",
        }}
        onClick={onOpen}
      >
        Modifier
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Modifier Utilisateur
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="nom">Nom et Prénom </FormLabel>
                <Input ref={firstField} id="nom" placeholder="Nom et Prénom" />
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Service</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="médecineGénérale.">médecine générale</option>
                  <option value="radiologie.">radiologie</option>
                  <option value="cardiologie">Cardiologie</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Service</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="ChefService.">Chef service</option>
                  <option value="Agent.">Agent</option>
                </Select>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="blue" >Confirmer</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

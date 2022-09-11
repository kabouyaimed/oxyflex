import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";

function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}
function AjouterUtilisateur({ isOpen, onClose }) {
  const Fournisseurs = [
    {
      name: "xx yy",
    },
    {
      name: "xx xx",
    },
    {
      name: "yy yy",
    },
  ];
  const firstField = React.useRef();
  const quantity = React.useRef();
  const HT = 1000;
  const TVA = 1000;
  const Livraison = 1000;
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <h1>Ajouter</h1>
            <h2 className="opacity-60">{getCurrentDate("/")}</h2>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box display="flex flex-col">
                <div className="flex-1 mt-2">
                  <FormLabel htmlFor="username">Matricule</FormLabel>
                  <Input
                    // ref={quantity}
                    id="matricule"
                    placeholder="N_12040055"
                    type="text"
                  />
                </div>
                <div className="flex-1 mt-2">
                  <FormLabel htmlFor="username">Nom & prenom</FormLabel>
                  <Input
                    // ref={quantity}
                    id="username"
                    placeholder="Nom et prénom"
                    type="text"
                  />
                </div>
                <div className="flex-1 mt-2">
                  <FormLabel htmlFor="capacity">Service</FormLabel>
                  <Select id="capacity" defaultValue="25L">
                    <option value="Medcinegeneral">Medcine general</option>
                    <option value="Cardiologie">Cardiologie</option>
                  </Select>
                </div>

                <div className="flex-1 mt-2">
                  <FormLabel htmlFor="role">Role</FormLabel>
                  <Input
                    // ref={quantity}
                    id="role"
                    placeholder="Chef service"
                    type="text"
                  />
                </div>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button backgroundColor="#2d62ec" color="#fff">
              Confirmer
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default AjouterUtilisateur;

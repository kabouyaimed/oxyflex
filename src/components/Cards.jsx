import{
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

import ModifierUtilisateur from './ModifierUtilisateur';
import Utilisateurs from "../pages/Tabs/Utilisateurs";
import SupprimerUtilisateur from "./SupprimerUtilisateur";

export default function Cards({ index, matricule, nom, service, role, image }) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={4}
        m={5}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={image}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {nom}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {matricule}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Service: {service}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Role: {role}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <ModifierUtilisateur />
         
          <Button
            flex={1}
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
           <SupprimerUtilisateur />
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

import { ImBell } from "react-icons/im";
import { Button, Text } from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import { useDisclosure } from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const notification_info = [
  {
    matricule: "1",
    service: "cardiologie",
    percentage: "23%",
    nbr_bouteille: "25 Bouteilles",
  },
  {
    matricule: "2",
    service: "M.génerale",
    percentage: "25%",
    nbr_bouteille: "19 Bouteilles",
  },
  {
    matricule: "3",
    service: "cardiologie",
    percentage: "30%",
    nbr_bouteille: "10 Bouteilles",
  },
  {
    matricule: "4",
    service: "M.génerale",
    percentage: "53%",
    nbr_bouteille: "9 Bouteilles",
  },
  {
    matricule: "3",
    service: "cardiologie",
    percentage: "30%",
    nbr_bouteille: "10 Bouteilles",
  },
  {
    matricule: "4",
    service: "M.génerale",
    percentage: "53%",
    nbr_bouteille: "9 Bouteilles",
  },
];

function Notifications() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l">
            <ImBell />
          </div>
          <h1>Notification</h1>
        </div>
      </div>

      <div className="shadow-xl flex flex-col    justify-between bg-[#fff] rounded-xl  h-fit py-5 mt-16 border-t-8 border-[#2d62ec]">
        <div className=" flex justify-between items-center px-10 my-2 text-20px font-bold">
          Liste des services atteindraient la quantité min d'usage
          <Button bg={"#2d62ec"} textColor="white">
            30%
          </Button>
        </div>
        <div className="notification-container items-center  ">
          {notification_info.map((item, index) => {
            return (
              <div className="notification-style ">
                <div>
                  <text>{item.service} </text>
                  <Navbar text={item.percentage} />
                </div>

                <Text fontSize="2xl" color="#F65F9C   ">
                  {item.nbr_bouteille}
                </Text>
              </div>
            );
          })}
        </div>
        <div className=" flex justify-between items-center px-10 my-2 text-20px font-bold">
          Stock min
          <Button bg={"#2d62ec"} textColor="white">
            29%
          </Button>
        </div>
        <div className=" flex justify-between items-center px-10 my-2 text-20px font-bold">
          Fin abonement
          <Button bg={"#2d62ec"} textColor="white">
            27/07/2022
          </Button>
        </div>{" "}
      </div>
    </div>
  );
}
export default Notifications;

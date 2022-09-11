import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Cards from "../../components/Cards";
import { useDisclosure } from "@chakra-ui/react";
import AjouterUtilisateur from "../../components/AjouterUtilisateur";
function Utilisateurs() {
  const user = [
    {
      matricule: "1",
      nom: "Liam ",
      service: "cardiologie",
      role: "agent",
      motdepass: 524,
      image:
        "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    },
    {
      matricule: "2",
      nom: "Emma",
      service: "cardiologie",
      role: "agent",
      motdepass: 53,
      image: "https://unsplash.com/photos/FKT0rzwhUsM",
    },
    {
      matricule: "3",
      nom: "Charlotte",
      service: "cardiologie",
      role: "chef service",
      motdepass: 53,
      image: "https://unsplash.com/photos/uMJQeoEsPaE",
    },
    {
      matricule: "4",
      nom: "Elijah",
      service: "cardiologie",
      role: "chef service",
      motdepass: "53",
      image: "https://unsplash.com/photos/uMJQeoEsPaE",
    },
    {
      matricule: "5",
      nom: "William ",
      service: "cardiologie",
      role: "agent",
      motdepass: 524,
      image: "https://unsplash.com/photos/uMJQeoEsPaE",
    },
    {
      matricule: "6",
      nom: "Isabella",
      service: "cardiologie",
      role: "chef service",
      motdepass: 53,
      image:
        'https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Dam</a> on <a href="https://unsplash.com/s/photos/avatar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
    {
      matricule: "7",
      nom: "Evelyn ",
      service: "cardiologie",
      role: "agent",
      motdepass: 524,
      image:
        "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    },
    {
      matricule: "8",
      nom: "Mia",
      service: "cardiologie",
      role: "chef service",
      motdepass: 53,
      image:
        'https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Dam</a> on <a href="https://unsplash.com/s/photos/avatar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
    {
      matricule: "9",
      nom: "Theodore ",
      service: "cardiologie",
      role: "agent",
      motdepass: 524,
      image:
        "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    },
    {
      matricule: "10",
      nom: "Lucas",
      service: "cardiologie",
      role: "chef service",
      motdepass: 53,
      image:
        'https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Dam</a> on <a href="https://unsplash.com/s/photos/avatar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  ];

  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = user.filter((matricule) => {
    return Object.keys(matricule).some((key) =>
      matricule[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l">
            <FiUsers />
          </div>
          <h1>Utilisateurs</h1>
        </div>
        <div>
          <button
            onClick={onOpen}
            className="mx-3 px-3 py-2 rounded text-xl bg-[#2d62ec] text-[#fff]"
          >
            + Ajouter Utilisateur
          </button>
        </div>
        {isOpen && (
          <div className="fixed  flex top-0  w-full z-30 ">
            <AjouterUtilisateur onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
          </div>
        )}
      </div>

      <Stack spacing={4} py={4}>
        <InputGroup style={{ flexDirection: "column", flex: 6 }}>
          <InputLeftElement
            color="bleu"
            pointerEvents="none"
            children={<SearchIcon color="bleu.300" />}
          />
          <Input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={searchText.bind(this)}
            width={"700px"}
            style={{ borderColor: "blue" }}
          />
        </InputGroup>
      </Stack>
      <div
        // className="cards-container"
        // style={{ display: "flex", flexWrap: "wrap" }}
        className="grid grid-cols-4 w-full overflow-y-scroll h-5/6"
      >
        {dataSearch.map((item, index) => {
          return (
            <div>
              <Cards
                index={index}
                matricule={item.matricule}
                nom={item.nom}
                service={item.service}
                role={item.role}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Utilisateurs;

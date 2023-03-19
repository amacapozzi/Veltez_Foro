import {
  Box,
  Table,
  Progress,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Tag,
  Avatar,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { ModalDeleteUser } from "./ModalDeleteUser";

export const TableAdmin = ({ newUsers }) => {
  const { cargando, users } = useUsers();
  const [newUser, setNewUser] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [usuario, setUsuario] = useState({});
  if (cargando) return <Progress size="xs" isIndeterminate />;

  const handleNewList = (user) => {
    const newList = users.filter((username) => username.name !== user.name);
    console.log(newList);
    setNewUser(newList);
  };

  return (
    <div>
      <Box rounded={"md"} w="100%" p={4} color="gray.200" bg="gray.900">
        <Table variant="simple">
          <Thead>
            <Tr textColor="white">
              <Th>
                USER (<i class="bi bi-person"></i>)
              </Th>

              <Th>
                ALIAS (<i class="bi bi-tag"></i>)
              </Th>

              <Th>
                IP (<i class="bi bi-wifi"></i>)
              </Th>

              <Th>
                TOKEN (<i class="bi bi-key"></i>)
              </Th>

              <Th>
                ACTIONS (<i class="bi bi-pencil-square"></i>)
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr key={user.name}>
                  <Th borderColor="gray.600">{user.name}</Th>
                  <Th borderColor="gray.600">{user.alias}</Th>
                  <Th borderColor="gray.600">{user.ip}</Th>
                  <Th borderColor="gray.600">{user.token}</Th>
                  <Th borderColor="gray.600">
                    {" "}
                    <Tag
                      onClick={() => {
                        setUsuario(user.name);
                        setModalDelete(true);
                        handleNewList(user);
                      }}
                      colorScheme="red"
                    >
                      DELETE
                    </Tag>{" "}
                    {modalDelete && (
                      <ModalDeleteUser
                        id={usuario}
                        username={usuario}
                        onClose={() => setModalDelete(false)}
                      />
                    )}
                    {user.banned === true ? (
                      <Tag colorScheme="red">BANNED</Tag>
                    ) : (
                      <Tag colorScheme="blue">BAN</Tag>
                    )}
                  </Th>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

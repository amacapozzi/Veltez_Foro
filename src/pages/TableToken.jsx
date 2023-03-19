import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Table, Thead, Tbody, Tr, Th, Tag, Progress } from "@chakra-ui/react";
import { useGetTokens } from "../hooks/useMapTokens";

export default function TableToken() {
  const { tokens, ltoken } = useGetTokens();

  if (ltoken) return <Progress size="xs" isIndeterminate />;

  return (
    <div>
      <Navbar />
      <Box
        rounded={"md"}
        w="100%"
        p={4}
        color="gray.200"
        bg="gray.900"
      >
        <Table variant="simple">
          <Thead>
            <Tr textColor="white">
              <Th>
                TOKEN (<i class="bi bi-key"></i>)
              </Th>

              <Th>
                STATUS (<i class="bi bi-clipboard-data"></i>)
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {tokens.map((t) => {
              return (
                <Tr key={t.token}>
                  <Th borderColor="gray.600">{t.token}</Th>
                  <Th borderColor="gray.600">{t.used == true ? <Tag colorScheme='blue'>used</Tag> : <Tag colorScheme={'green'}>Dont used</Tag>}</Th>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

import React, {useState, useEffect, useRef} from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,

  } from '@chakra-ui/react'
    import { Logo } from '../components/Logo'
    import { PasswordField } from '../components/PasswordField'


    const Register = () => {

    const [name, setName] = useState();
    const [acces, setAcces] = useState();
    const [succes, setSucces] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const inputRef = useRef(null);




    const handleCloseSucces = (e) => {
        setSucces(false);
    }

    const handleCloseError = (e) => {
        setError(false);
    }

    const handleClick = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/register?name=${name}&token=test`, {
            method: "POST",
            headers: {
                'api-key': 'RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ'
            }
        });

        const data = await response.json();


        if(!name){
            setError("Enter user or access token");
            setLoading(false);
            return false;
        }

        if(data.error){
            setError(data.error);
            setLoading(false);
            return false;
        }

        if(data.succes) {
            setSucces(data.succes)
            setLoading(false);
            setTimeout(() => {
             window.location.href = '/login'
            }, 1250);
        }



    }


    return(

        <Container

        maxW="lg"
        py={{
          base: '12',
          md: '24',
        }}
        px={{
          base: '0',
          sm: '8',
        }}
      >

        

        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack
              spacing={{
                base: '2',
                md: '3',
              }}
              textAlign="center"
            >
              <Heading
                size={{
                  base: 'xs',
                  md: 'sm',
                }}
              >
                Create your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Do you have account?</Text>
                <Button onClick={() => window.location.href = '/login'} variant="link" colorScheme="blue">
                Sign in
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{
              base: '0',
              sm: '8',
            }}
            px={{
              base: '4',
              sm: '10',
            }}
            bg={{
              base: 'transparent',
              sm: 'bg-surface',
            }}
            boxShadow={{
              base: 'none',
              sm: 'md',
            }}
            borderRadius={{
              base: 'none',
              sm: 'xl',
            }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input onChange={() => {
                        setName(inputRef.current.value)
                  }} ref={inputRef} id="name" type="text" />
                
                </FormControl>
                <PasswordField/>
                {error && <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Error!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                <CloseButton onClick={handleCloseError} position="absolute" right="8px" top="8px" />
                </Alert>
                }

                {succes && <Alert status="success">
                <AlertIcon />
                <AlertTitle mr={2}>Success!</AlertTitle>
                <AlertDescription>Logged in succesfully</AlertDescription>
                <CloseButton onClick={handleCloseSucces} position="absolute" right="8px" top="8px" />
                </Alert>
                }
                
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                
              </HStack>
              <Stack spacing="6">
                <Button onClick={handleClick} color="primary">Sign up</Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    This is a private foro
                  </Text>
                  <Divider />
                </HStack>
         
              </Stack>
            </Stack>
          </Box>
        </Stack>
     
      </Container>
     

    )
}

export default Register;

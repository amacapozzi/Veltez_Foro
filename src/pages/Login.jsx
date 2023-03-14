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



   const Login = () => {


    const [name, setName] = useState();
    const [acces, setAcces] = useState();
    const [error, setError] = useState();
    const [succes, setSuuces] = useState();
    const inputRef = useRef(null);
    
    useEffect(() => {
        document.title = "Login"
    }, [])

    const handleCloseError = (e) => {
        setError(false)
    }

    const handleCloseSucces = (e) => {
        setSuuces(false)
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleChangeAcces = (e) => {
        setAcces(e.target.value);
    }

    const handleSumbit = async (e) => {
      e.preventDefault();
      if (!name || !acces) {
        return setError("Enter user or access token") && setTimeout(() => {
          setError(false);
        }, 3250);
      }

      try {

        const response = await fetch(`http://localhost:3000/login?name=${name}&password=${acces}`, {
          method: "POST",
          headers: {
              'api-key': 'RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ'
          }
      })

      const data = await response.json();
      if(data.error){
        setError(data.error);
        setTimeout(() => {
          setError(false);
        }
        , 3250);
      }

      if(data.succes){
        setSuuces(data.succes);
        localStorage.setItem('token', data.user?.token)

        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1250);

      }

      } catch (err) {
        setError(data.error);
      }
    }


    return(
       
        <Container onSubmit={handleSumbit} as="form"

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
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button onClick={() => window.location.href = '/register'} variant="link" colorScheme="blue">
                  Sign up
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
                  <Input onChange={handleChange}
                   ref={inputRef} id="name" type="text" />
                </FormControl>
                <PasswordField onChange={handleChangeAcces} />
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
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot token?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button type="sumbit" color="primary">Sign in</Button>
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

export default Login;

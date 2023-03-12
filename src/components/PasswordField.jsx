import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs
} from '@chakra-ui/react'
import { forwardRef, useEffect, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useState } from 'react'
import Login from '../pages/Login'

export const PasswordField = forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)
  const [acces, setAcces] = useState()

  const onClickReveal = () => {
    onToggle()
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true
      })
    }
  }
  return (
    <FormControl
      onSubmit={e => {
        e.preventDefault()
        setAcces(e.target.password.value)
      }}
    >
      <FormLabel htmlFor='password'>Token</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant='link'
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id='password'
          ref={mergeRef}
          name='password'
          type={isOpen ? 'text' : 'password'}
          autoComplete='current-password'
          required
          {...props}
        />
      </InputGroup>
      {acces && <Login acces={acces} />}
    </FormControl>
  )
})
PasswordField.displayName = 'PasswordField'
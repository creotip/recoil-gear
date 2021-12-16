import {
  Box,
  Button,
  ChakraProvider,
  Code,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
} from '@chakra-ui/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useState } from 'react'
import { counterState, nameState } from './recoil-state'
import { Counter, FirstName } from './state-components'

const code = `import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import { RecoilDevTools } from 'recoil-gear'

<RecoilRoot>
    <RecoilDevTools />
    <App />
</RecoilRoot>
`
export function App() {
  const setText = useSetRecoilState(nameState)
  const [counter, setCounter] = useRecoilState(counterState)
  const [tempText, setTempText] = useState('')
  const [tempCounter, setTempCounter] = useState<number | string>(0)

  const handleSubmitText = (e: any) => {
    setText(tempText)
    setTempText('')
    e.preventDefault()
  }

  const handleSubmitCounter = (e: any) => {
    setCounter(+tempCounter)
    setTempCounter(0)
    e.preventDefault()
  }

  return (
    <>
      <Box maxW="960px" mx="auto" mt="2rem" pb="4rem" px="1rem">
        <Box as="h1" fontSize="2rem" textAlign="center" mb={1}>
          <strong>recoil-gear</strong>
        </Box>
        <Box as="h2" fontSize="1rem" textAlign="center" mb={10}>
          Recoil connector to Redux DevTools
        </Box>
        <Box mb={10} textAlign="center">
          <Box as="h3" mb={2}>
            install
          </Box>
          <Code bgColor="rgb(0 0 0 / 7%)" borderRadius={5} p={3}>
            yarn add recoil-gear
          </Code>
        </Box>
        <Box mb={10} textAlign="center">
          <Box as="h3" mb={2}>
            usage
          </Box>
          <Code
            bgColor="rgb(0 0 0 / 7%)"
            borderRadius={5}
            p={3}
            textAlign="left"
            fontSize={['12px', '14px']}
          >
            <Box as="pre" whiteSpace="pre-wrap">
              {code}
            </Box>
          </Code>
        </Box>
        <Box textAlign="center" mb={10}>
          <Box>
            <Code>1. open up redux devtools</Code>
          </Box>
          <Box>
            <Code>2. play with inputs</Code>
          </Box>
          <Box>
            <Code>3. observe state changes in redux devtools</Code>
          </Box>
        </Box>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          <Box border="1px solid #c1c1c1" borderRadius={7} p={4}>
            <form onSubmit={handleSubmitText}>
              <FormControl id="first-name" isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  placeholder="First name"
                  value={tempText}
                  onChange={(e) => setTempText(e.target.value)}
                />
                <Button type="submit" colorScheme="blackAlpha" mt={3} size="sm">
                  submit
                </Button>
              </FormControl>
            </form>
          </Box>

          <Box border="1px solid #c1c1c1" borderRadius={7} p={4}>
            <FirstName />
          </Box>

          <Box border="1px solid #c1c1c1" borderRadius={7} p={4}>
            <form onSubmit={handleSubmitCounter}>
              <FormLabel>First name</FormLabel>
              <NumberInput
                defaultValue={tempCounter}
                onChange={(valueString) => setTempCounter(valueString)}
                value={tempCounter}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Button type="submit" colorScheme="blackAlpha" mt={3} size="sm">
                submit
              </Button>
            </form>
          </Box>
          <Box border="1px solid #c1c1c1" borderRadius={7} p={4}>
            <Counter />
          </Box>
        </SimpleGrid>
      </Box>
      <Box as="footer" textAlign="center" py={10}>
        made by creotip
      </Box>
    </>
  )
}

export default App

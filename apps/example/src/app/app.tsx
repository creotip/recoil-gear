import {
  Box,
  Button,
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
        <Box as="h1" fontSize="90px" fontWeight="200" textAlign="center" mb={1}>
          recoil-gear
        </Box>
        <Box as="h2" fontSize="1rem" textAlign="center" mb={5}>
          Recoil connector to Redux DevTools
        </Box>
        <Box textAlign="center" mb={10}>
          <Box display="inline-block" overflow="hidden">
            <Button
              as="a"
              href="https://github.com/creotip/recoil-gear"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Star creotip/recoil-gear on GitHub"
              color="#24292f"
              bgColor="#ebf0f4"
              backgroundImage="linear-gradient(180deg, #f6f8fa, #ebf0f4 90%)"
              borderRadius="0.25em"
              border="1px solid #ccd1d5"
              height="30px"
              p="5px 10px"
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                className="octicon octicon-star"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>
              &nbsp;<span>Star</span>
            </Button>
          </Box>
        </Box>
        <Box mb={10} textAlign="center">
          <Box as="h3" mb={2} fontWeight="700" fontSize="1.2rem">
            install
          </Box>
          <Code bgColor="rgb(0 0 0 / 7%)" borderRadius={5} p={3}>
            yarn add recoil-gear
          </Code>
        </Box>
        <Box mb={10} textAlign="center">
          <Box as="h3" mb={2} fontWeight="700" fontSize="1.2rem">
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
            <Code p={2} mb={2}>
              1. open up redux devtools
            </Code>
          </Box>
          <Box>
            <Code p={2} mb={2}>
              2. play with inputs
            </Code>
          </Box>
          <Box>
            <Code p={2} mb={2}>
              3. observe state changes in redux devtools
            </Code>
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
              <FormLabel>Counter</FormLabel>
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
        made by{' '}
        <a href="https://creotip.io">
          <strong>creotip</strong>
        </a>
      </Box>
    </>
  )
}

export default App

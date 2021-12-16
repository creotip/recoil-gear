import { Box, Divider } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { counterState, nameState } from './recoil-state'

export const FirstName = () => {
  const myFirstName = useRecoilValue(nameState)
  return (
    <Box>
      <Box fontSize="1rem" fontWeight="500">
        First name state
      </Box>
      <Divider mb={4} />
      <Box>{myFirstName}</Box>
    </Box>
  )
}

export const Counter = () => {
  const counter = useRecoilValue(counterState)
  return (
    <Box>
      <Box fontSize="1rem" fontWeight="500">
        Counter state
      </Box>
      <Divider mb={4} />
      <Box>{counter}</Box>
    </Box>
  )
}

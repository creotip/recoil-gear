import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import App from './app/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RecoilDevTools } from 'recoil-gear'
import { RecoilRoot } from 'recoil'

const theme = extendTheme({
  colors: {
    bg: '#fef1e5',
  },
  styles: {
    global: {
      'html, body': {
        height: '100vh',
        backgroundColor: '#fef1e5',
      },
    },
  },
  zIndexElements: {
    header: 12,
  },
})

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <RecoilDevTools />
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
)

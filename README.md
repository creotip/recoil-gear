<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# recoil-gear

Recoil connector to Redux DevTools
  


</div>

## Installation

```sh 
yarn add recoil-gear
```

or

```sh 
npm install recoil-gear
```

## Usage

```jsx
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import { RecoilDevTools } from 'recoil-gear'

<RecoilRoot>
    <RecoilDevTools />
    <App />
</RecoilRoot>
```

Open up redux devtools and observe state changes in redux devtools



![Screen Shot 2021-12-17 at 23 18 52](https://user-images.githubusercontent.com/3135968/146609246-5969debb-a85e-48a6-abb9-a99eb01a66e3.png)


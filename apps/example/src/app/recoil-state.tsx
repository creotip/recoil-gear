import { atom } from 'recoil'

export const nameState = atom({
  key: 'nameState',
  default: '' as string,
})

export const counterState = atom({
  key: 'counterState',
  default: 0 as number,
})

import { render } from '@testing-library/react'
import { RecoilDevTools } from './recoil-gear'

describe('RecoilDevTools', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecoilDevTools />)
    expect(baseElement).toBeTruthy()
  })
})

import type { Reducer, Store } from 'redux'
import type { Snapshot } from 'recoil'
import { createStore } from 'redux'
import { useRecoilSnapshot } from 'recoil'
import { useEffect } from 'react'

let RecoilDevTools = () => null
const reduxDevtoolsExtension =
  typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__

if (reduxDevtoolsExtension) {
  const reducer: Reducer = (state = {}, { payload }) => {
    if (payload?.node?.key) {
      return { ...state, [payload.node.key]: payload.loadable }
    } else {
      return state
    }
  }

  const store: Store = createStore(
    reducer,
    reduxDevtoolsExtension({
      name: 'recoil state observer',
      maxAge: 100,
    })
  )
  RecoilDevTools = () => {
    const snapshot: Snapshot = useRecoilSnapshot()

    useEffect(() => {
      for (const node of snapshot.getNodes_UNSTABLE({ isModified: false })) {
        const loadable = snapshot.getLoadable(node)
        const action = {
          type: `[state] ${node.key}`,
          payload: { node, loadable: loadable.contents },
        }

        store.dispatch(action)
      }
    }, [])

    useEffect(() => {
      for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
        const loadable = snapshot.getLoadable(node)
        const action = {
          type: `[state] ${node.key}`,
          payload: { node, loadable: loadable.contents },
        }

        store.dispatch(action)
      }
    }, [snapshot])
    return null
  }
}

export { RecoilDevTools }

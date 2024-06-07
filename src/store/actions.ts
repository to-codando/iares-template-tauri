import type { ActionType } from './types'

export const createActions: ActionType = (store) => {
  const getText = () => {
    return store.state.text
  }

  return {
    getText
  }
}

import type { StateType } from '@/utils/types'

export interface StoreType {
  text: string
}

export interface StoreActions {
  getText: () => string
}

export type ActionType = (store: StateType<StoreType>) => StoreActions

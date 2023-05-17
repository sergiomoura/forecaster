import { createContext } from 'react'
import { SystemEventHub } from './SystemEventHub'
import { SystemServices } from './SystemServices'

export const Context = createContext({
  SystemEventHub,
  SystemServices
})

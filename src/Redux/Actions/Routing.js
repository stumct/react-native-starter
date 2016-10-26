import { POP_ROUTE, PUSH_ROUTE } from '../Constants'

export const push = (route) => {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export const pop = () => {
  return {
    type: POP_ROUTE
  }
}
import {
  AUTHENTICATED
} from './constants'

const userReducer = (state = null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user

  default:
    return state
  }
}

export default userReducer

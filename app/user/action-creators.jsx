import axios from 'axios'
import { browserHistory } from 'react-router'

import {
  AUTHENTICATED
} from './constants'

const authenticated = user => ({
  type: AUTHENTICATED,
  user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      { username, password })
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(() => dispatch(authenticated(null)))

export const addUser = user =>
  dispatch =>
    axios.post('/api/users', user)
      .then(newUser => {
        dispatch(login(newUser.data.email, newUser.data.password))
        browserHistory.push('/products')
      })
      .catch(err => console.error('Could not create new user', err))

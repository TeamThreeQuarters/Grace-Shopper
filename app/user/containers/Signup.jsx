'use strict'

import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { login, addUser } from '../action-creators';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  login: (name, password) => dispatch(login(name, password)),
  signup: event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    dispatch(addUser({ email, password }))
  }
});

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;

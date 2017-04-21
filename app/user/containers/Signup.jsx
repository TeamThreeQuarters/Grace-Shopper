'use strict'

import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { login } from 'APP/app/reducers/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  login: (name, password) => dispatch(login(name, password))
});

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;

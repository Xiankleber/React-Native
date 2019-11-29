import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// import { Container } from './styles';

const Validarprop= props =>
<Text style ={{fontSize:35}}>
  {props.label}
  {props.ano + 2000}
</Text>

Validarprop.defaultProps = {
  label:'Ano'
}

Validarprop.PropTypes ={
  ano: PropTypes.number.isRequired
}

export default Validarprop
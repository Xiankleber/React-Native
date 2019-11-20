
import React from 'react';
import { View,StyleSheet } from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/Parimpar';
import {Inverter, MegaSena} from './componentes/Multi'

// import { Container } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Simples texto= 'Flexível!!!!!'/>
      <ParImpar numero ={7}/>
      <Inverter texto='ReactNativo!'/>
      <MegaSena numeros={9}/>
    </View>    
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent :'center',
    alignItems:'center',

  },
  f20:{
    fontSize:40
  }
})

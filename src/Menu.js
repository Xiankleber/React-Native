import React from'react'
import{ createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples';
import ParImpar from './componentes/Parimpar';
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Evento from './componentes/Evento'

export default createDrawerNavigator ({
  Evento:{
    screen: Evento
  },
  Contador: {
    screen: () => <Contador/>,
  },
  MegaSena:{
    screen: () =><MegaSena numeros={8}/>,
    navigationOptions: {title:'Mega Sena'}
  },

  Inverter:{
    screen: () =><Inverter texto='React Nativo!'/>,
   
  },

  ParImpar:{
    screen: () =><ParImpar numeros={30}/>,
    navigationOptions: {title:'Par & Impar'}
  },
  Simples:{
    screen: () =><Simples texto='Flexível!!!'/>,
  }
  
},{drawerWidth:300})
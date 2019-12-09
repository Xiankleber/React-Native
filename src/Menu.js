import React from'react'
import{ createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples';
import ParImpar from './componentes/Parimpar';
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Evento from './componentes/Evento'
import Plataforma from './componentes/Plataforma'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator ({

ListaFlex:{
  screen: ListaFlex,
  navigationOptions:{title:'Lista Flex'}
},


  TextoSincronizado:{
    screen:TextoSincronizado,
    navigationOptions: {title: 'Texto Sincronizado'}
  },

  Avo: {
    screen: () => <Avo nome= 'Diego'sobrenome='Fernandes'/>
  },

  Evento:{
    screen: Evento
  },
  Plataforma:{
    screen: Plataforma
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

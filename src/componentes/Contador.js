import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'


export default class Contador extends Component{
  
state={
  numero: 0

}
Inserir = () =>{
  this.setState({numero: this.state.numero + 1 })
}

limpar = () => {
  this.setState({numero:0})
}

  render() {
    return (
      <View>
        <Text style={{fontSize:50}}>{this.state.numero}</Text>
        <TouchableHighlight
        onPress={this.Inserir}
        onLongPress={this.limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
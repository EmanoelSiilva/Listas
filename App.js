import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import Body from './componentes/body';


export default function App() {
  

  const [estado, setEstado] = useState('Leitura');
  const [anotacao, setAnotacao] = useState('')



  
  if(estado == 'Leitura'){
    return(
      <View style={{marginTop: Constants.statusBarHeight}}>
        <StatusBar style='light'/>
        <View style={estilos.header}><Text style={{textAlign: 'center', color:'white', fontSize:18}}>Aplicativo Anotação</Text></View>
        {
          (anotacao != '') ?
          <View style={{padding:20}}><Text style={estilos.anotacao}>{anotacao}</Text></View>
          :
          <View style={{padding:20}}><Text style={{opacity:0.3}}>Nenhuma anotação encontrada =(</Text></View>
        }
        <TouchableOpacity onPress={() => setEstado('Atualizando')} style={estilos.btnAnotacao}>
          { (anotacao != '') ?
          <Text style={estilos.btnAnotacaoTextoEditar}>Editar</Text>
          :
          <Text style={estilos.btnAnotacaoTexto}>+</Text>
          }
        </TouchableOpacity>
      </View>
    );
  } else if(estado == 'Atualizando') {
    return(
      <View style={{marginTop: Constants.statusBarHeight}}>
        <StatusBar style='light'/>
        <View style={estilos.header}><Text style={{textAlign: 'center', color:'white', fontSize:18}}>Aplicativo Anotação</Text></View>
        <TextInput onChangeText={(text) =>setAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao} style={{textAlignVertical:'top', padding:20}}/>
        <TouchableOpacity onPress={() => setEstado('Leitura')} style={estilos.btnSalvar}><Text style={{textAlign:'center', color:'white'}}>Salvar</Text></TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  header:{
    width:'100%',
    padding: 20,
    backgroundColor: '#069'
  },
  anotacao:{
    fontSize:13,
  },
  btnAnotacao:{
    position:'absolute',
    right:0,
    bottom:-540,
    width:50,
    height:50,
    backgroundColor:'#069',
    borderRadius:25,
  },
  btnAnotacaoTexto:{
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: 3,
    fontSize: 30,
  },
  btnAnotacaoTextoEditar:{
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: 13,
    fontSize: 15,
  },
  btnSalvar:{
    position:'absolute',
    right:0,
    bottom:-480,
    width:100,
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor:'#069',
  }
})


/*
export default class App extends React.Component() {

  
  render() {
    return(
      <View style={{marginTop: Constants.statusBarHeight}}>
        <Text>Cachorro</Text>
      </View>
    )
  }    
}
*/



    //<Body texto= "isso aqui é um texto" titulo="clique aqui - otario"></Body>






/*
export default function dataNasc() {
  
  const name = "Emanoel";
  var mostrarConteudo = true; 
  var componente = [];

  for (let index = 1970; index <= 2021; index++) {
    componente.push(<Text>{index}</Text>);
  }

  if (mostrarConteudo) {
    return (
      <ScrollView>
        <View style={{marginTop: Constants.statusBarHeight}}>
        {
          componente.map((val) => {
            return(val)
          })
        }
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={{marginTop: Constants.statusBarHeight}}>
      <Text>O mundo é uma mentira, meu caro amigo!</Text>
      </View>
    )
    
  }
  
}
*/

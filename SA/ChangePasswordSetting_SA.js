import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

//export default function App() {
export default class Touchables extends Component {
  
state={
    newpsw:'',
    retypepsw:''
    };

 render(){
  return (
    <View style={styles.container}>

      <View style={styles.SetpswC}>
        <Text style={styles.intructionpsw}>New Password</Text>
        <TextInput 
            secureTextEntry={true} 
            style={styles.inputpsw}
            onChangeText={text => this.setState({newpsw:text})}
            />
        <Text style={styles.intructionpsw}>Retype  Password</Text>
        <TextInput 
            //secureTextEntry={true} 
            style={styles.inputpsw}
            onChangeText={text => this.setState({retypepsw:text})}
            />
        </View>
      
      <View style={styles.ButtonView}>
       <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={()=> this.props.navigation.goBack()} 
            >
            <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>
        <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={()=> this.props.navigation.goBack()} 
            >
            <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'Left',
    padding:"10%"
  },

  SetpswC:{
  backgroundColor:"white",
  },

  intructionpsw:{
  fontWeight:"bold",
  marginTop:10,
  },

  inputpsw:{
  marginTop:10,
  //borderWidth:2,
  backgroundColor:"lightgrey",
  padding:10,
  borderRadius: 5
  },

  ButtonView: {
  marginTop:20,
  flexDirection: 'row',
  justifyContent: 'space-around',
  //backgroundColor:"black",
  },

  Button:{
  backgroundColor:'black',
  padding: 10,
  width:'30%',
  borderRadius: 5,
  },

  ButtonContent:{
  textAlign:'center',
  color:"white",
  fontWeight:'bold',
  },

});

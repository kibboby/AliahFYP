import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import {StackNavigator,} from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

//export default function App() {
export default class Touchables extends Component {

 static navigationOptions = {
    title: 'resset psw',
    //headerShown:false,
    //Sets Header text of Status Bar
  };

_onPressChangePswButton(){
const{newpsw}=this.state;
const{retypepsw}=this.state
const{p1}=this.state;

if(newpsw == retypepsw && newpsw!="")
{
 const url = 'http://localhost:80/BAckend/ressetpsw.php';
        fetch( url,
            {
                method: 'POST',
                headers:
                {
                   'Origin': '*',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        newpsw: this.state.newpsw,
                        retypepsw: this.state.retypepsw,
                        user:this.state.p1,
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {

            }).catch((error) => {
                console.log(error);
            });
    
  alert("Password Change Successfully")
  this.props.navigation.goBack()
}
else
 {
  alert('Pasword not Match or no input')
  //alert(p1)
  }
 }


_onPressCancelChangePswButton() {
    alert('Password Remains')
    //this.props.navigation.navigate('CAPage',{p1:p1})
    //navigation.goBack()
    //this.props.navigation.goBack()
    //this.props.navigation.navigate.goBack()
  }
  
constructor(props){
    super(props)
    this.state={
        newpsw:'',
        retypepsw:'',
        p1:this.props.navigation.state.params.p1,
    }
}
//state={
    //newpsw:'',
    //retypepsw:''
    //};
    

 render(){
 var p1 =this.props.navigation.state.params.p1;
 const { navigate } = this.props.navigation;
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
            //onPress={this. _onPressCancelChangePswButton}
             onPress={() => this.props.navigation.goBack()}
            >
            <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>
        <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
           // onPress={this._onPressChangePswButton}
           onPress={() => this._onPressChangePswButton()} 
           >
            <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>
        

        </View>
         <Text>username is {p1}</Text>




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
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
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
  width:150,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  },

  ButtonContent:{
  textAlign:'center',
  color:"white",
  fontWeight:'bold',
  },

});

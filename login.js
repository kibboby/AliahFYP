import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
//import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, ImageBackground} from 'react-native';


//export default function App() {
export default class Touchables extends Component {

 _onPressLoginButton() {
    alert('Wrong username/password')
  }

  _onPressForgotButton() {
    alert('You May Reset Your Password Here')
  }

   state={
    user:"",
    password:""
  }

    
 render() {
  return (
    <View style={styles.container}>
    {/* https://wallpaperaccess.com/full/1503970.jpg */}
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1562710057-b3a85fa9ba85?ixlib=rb-1.2.1&w=1000&q=80'}} style={styles.image}>
    
    <View style={styles.titleC}>
      <Text style={styles.title}>Sales Customer Management System</Text>
    </View>

    <View style={styles.uandp}>

    <View style={styles.usernameC}>
      <Text style={styles.username}>Username : </Text>
      <TextInput 
      style={styles.input}
      placeholder='User'
      onChangeText={text => this.setState({user:text})}
       />
    </View>

    <View style={styles.passwordC}>
      <Text style={styles.password}>Password : </Text>
      <TextInput 
      secureTextEntry={true} 
      style={styles.input}
      placeholder='Psw'
      onChangeText={text => this.setState({password:text})}
      />
    </View>

    <View>
     <TouchableOpacity
      onPress={this._onPressForgotButton}>
          <Text style={styles.forgot}>Forgot Password?</Text>
     </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
         style={styles.LoginButton}
         onPress={this._onPressLoginButton}
         //disabled={!this.state.isFormValid}
         >
         <Text style={styles.Login}>SIGN IN</Text>
     </TouchableOpacity>
     </View>

     </View>

  
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
     
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor:"grey",
    alignItems: 'center',
    //justifyContent: 'center',
  },

  image: {
    flex: 1,
    width:'100%',
    height:'100%',
    resizeMode: "cover",
    justifyContent: "center"

  },

  uandp:{
  backgroundColor:"white",
  padding: 50,
  marginLeft: "18%",
  marginRight: "18%",
  alignItems:'center',
  //justifyContent: 'center',
  },

  titleC: {
  padding:10,
  marginBottom:50,
  //backgroundColor: '#FF0000'
  },

  title: {
    //40
    fontSize: 40,
    textAlign: 'center',
    fontWeight: "bold",
    color:"white",

  },

  input: {
    borderWidth: 2,
    //borderColor: '#FF0000',
    backgroundColor: '#D3D3D3',
    // borderColor: '#FF0000',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    fontSize: 20,
    marginBottom:10,
    marginTop:5,
    width:200,
    alignSelf: 'flex-start',
  },

  forgot:{
    color:"black",
    fontWeight:"bold",
    fontSize:15,
    textAlign:"center",
  },

  LoginButton: {
    width: 200,
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    //borderRadius: 50,
  },

  username: {
  fontSize: 20,
  fontWeight: "bold"
  },

  password:{
  fontSize: 20,
  fontWeight: "bold"
  },

  Login: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: "center",
    textAlign: "center",
  },
  
});

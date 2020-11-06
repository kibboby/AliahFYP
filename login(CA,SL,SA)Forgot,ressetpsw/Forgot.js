import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StackNavigator,} from 'react-navigation';
//import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, ImageBackground} from 'react-native';
import email from 'react-native-email';


export default class Forgots extends Component {
 static navigationOptions = {
    title: 'Forgot Password',
    //headerShown:false,
    //Sets Header text of Status Bar
  };


  constructor() {
        super();
        this.state = {
            FORGOT_email: '',
            ActivityIndicator_Loading: false,
        }
    }

    _resset()
    {
    var x ="dasadas"
    alert("sucessful resset "+x)
    }

    _resset_MySQL() {
        const url = 'http://localhost:80/BAckend/forgot.php';
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
                        email: this.state.FORGOT_email,
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {

            
    
     if(responseJsonFromServer=="Invalid email")
     {
     alert(responseJsonFromServer)
     this.props.navigation.navigate('Login')
     }

     else{
     ///////////
      //const to = [this.state.FORGOT_email] // string or array of email addresses
      const to = ["weedragon1999@gmail.com"] // string or array of email addresses
       email(to, {
            //Optional additional arguments
            subject: 'Reset Password Sucessful',
            body: 'Password reset to"Karuna"'})
        //const sgMail =require("@sendgrid/mail");
        //sgMail.setApiKey('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');
        //const msg={
            //to: "weedragon1999@gmail.com",
            //from: "weedragon1999@gmail.com",
            //subject:"Reset Password Successful",
            //text:"Password reset to \"Karuna\""
        //};
        //sgMail.send(msg);
    ////////////
            alert(responseJsonFromServer)
            this.props.navigation.navigate('Login')
     }

            }).catch((error) => {
                console.log(error);
            });
    }
 

    
 render() {
  return (
    <View style={styles.container}>
    {/* https://wallpaperaccess.com/full/1503970.jpg */}
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1562710057-b3a85fa9ba85?ixlib=rb-1.2.1&w=1000&q=80'}} style={styles.image}>
    

    <View style={styles.emailwhite}>

    <View style={styles.usernameC}>
      <Text style={styles.email}>User Email : </Text>
      <TextInput 
      style={styles.input}
      placeholder='Email'
      onChangeText={text => this.setState({ FORGOT_email:text})}
       />
    </View>

   
    <View>
        <TouchableOpacity
         style={styles.RessetButton}
         onPress={() => this._resset_MySQL()}
         //onPress={() => this._resset()}
         >
         <Text style={styles.Resset}>RESET</Text>
     </TouchableOpacity>
     </View>
     <Text >{"email====>"+this.state. FORGOT_email }</Text>
     </View>

  
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
     
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"grey",
    alignItems: 'center',
  },

  image: {
    flex: 1,
    width:'100%',
    height:'100%',
    resizeMode: "cover",
    justifyContent: "center"

  },

  emailwhite:{
  backgroundColor:"white",
  padding: 50,
  marginLeft: "18%",
  marginRight: "18%",
  alignItems:'center',
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

 
  RessetButton: {
    width: 200,
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    //borderRadius: 50,
  },

  email: {
  fontSize: 20,
  fontWeight: "bold"
  },

  
  Resset: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: "center",
    textAlign: "center",
  },
  
});

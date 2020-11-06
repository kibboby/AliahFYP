import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StackNavigator,} from 'react-navigation';
//import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, ImageBackground} from 'react-native';
import { Base64 } from 'js-base64';


//export default function App() {
export default class Touchables extends Component {

////////////////////////testing//////////////////////////
 _onPressLoginButton() {
    //alert('Wrong username/password')
    //this.props.navigation.navigate('./Dashboard_CA.js')
    var responseJsonFromServer='CA';

    if(responseJsonFromServer== 'CA')
            {
            //Then open Profile activity and send user email to profile activity.
            ////this.props.navigation.navigate('Second', { Email: UserEmail });
            //alert('Log in as Company admin')
            this.props.navigation.navigate('CAPage')
            }

    else if(responseJsonFromServer == 'SL')
            {
            //Then open Profile activity and send user email to profile activity.
           ////this.props.navigation.navigate('Second', { Email: UserEmail });
            //alert('Log in as Salesperson')
            this.props.navigation.navigate('SLPage')
            }

    else if(responseJsonFromServer == 'SA')
            {
            //Then open Profile activity and send user email to profile activity.
            ////this.props.navigation.navigate('Second', { Email: UserEmail });
             //alert('Log in as Super admin')
             this.props.navigation.navigate('SAPage')
            }
    else
    {
        alert('Invalid username/password')
    }
  }
//////////////////////////////////////////////////

  _onPressForgotButton() {
    //alert('You May Reset Your Password Here')
    this.props.navigation.navigate('Forgot')
  }

   //state={
   // user:"",
   //password:"",
  //}

  static navigationOptions = {
    headerShown:false,
  };

  constructor() {
        super();
        this.state = {
            LOGIN_username: '',
            LOGIN_password: '',
            ActivityIndicator_Loading: false,
        }
    }

    _Login_MySQL() {
        const url = 'http://localhost:80/BAckend/Login.php';
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
                        username: this.state.LOGIN_username,
                        //password: this.state.LOGIN_password
                        password: Base64.encode(this.state.LOGIN_password)
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {

            //var responseJsonFromServer =JSON.parse(responseJsonFromServer);

            if(responseJsonFromServer== 'CA')
            {
            //Then open Profile activity and send user email to profile activity.
            ////this.props.navigation.navigate('Second', { Email: UserEmail });
            //alert('Log in as Company admin')
            this.props.navigation.navigate('CAPage',{p1:this.state. LOGIN_username})
            }

             else if(responseJsonFromServer == 'SL')
            {
            //Then open Profile activity and send user email to profile activity.
           ////this.props.navigation.navigate('Second', { Email: UserEmail });
            //alert('Log in as Salesperson')
            this.props.navigation.navigate('SLPage',{p1:this.state. LOGIN_username})
            }

             else if(responseJsonFromServer == 'SA')
            {
            //Then open Profile activity and send user email to profile activity.
            ////this.props.navigation.navigate('Second', { Email: UserEmail });
             //alert('Log in as Super admin')
             this.props.navigation.navigate('SAPage',{p1:this.state. LOGIN_username})
            }
            else
            {
            alert('Invalid USERNAME or PASSWORD')
            //alert(responseJsonFromServer)
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
    
    <View style={styles.titleC}>
      <Text style={styles.title}>Sales Customer Management System</Text>
    </View>

    <View style={styles.uandp}>

    <View style={styles.usernameC}>
      <Text style={styles.username}>Username : </Text>
      <TextInput 
      style={styles.input}
      placeholder='User'
      onChangeText={text => this.setState({LOGIN_username:text})}
       />
    </View>

    <View style={styles.passwordC}>
      <Text style={styles.password}>Password : </Text>
      <TextInput 
      secureTextEntry={true} 
      style={styles.input}
      placeholder='Psw'
      onChangeText={text => this.setState({LOGIN_password:text})}
      />
    </View>

    <View>
     <TouchableOpacity
      onPress={() => this._onPressForgotButton()}>
          <Text style={styles.forgot}>Forgot Password?</Text>
     </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
         style={styles.LoginButton}
         onPress={() => this._Login_MySQL()}
         //onPress={() => this._onPressLoginButton()}
         //disabled={!this.state.isFormValid}
         >
         <Text style={styles.Login}>SIGN IN</Text>
     </TouchableOpacity>
     </View>
     <Text >{"username====>"+this.state.LOGIN_username }</Text>
    <Text >{"password====>"+Base64.encode(this.state.LOGIN_password) }</Text>
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

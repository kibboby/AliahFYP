import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


//export default function App() {
export default class Touchables extends Component {

_onPressSubmitButton() {
    alert('Nothing to Submit')
  }

state={
remarksDescription:''
};
   
render(){
  return (
    <View style={styles.container}>
        <View  style={styles.RemarksC}>
            <Text style={styles.Remarks}>Remarks</Text>
            <TextInput 
            style={styles.inputR}
            placeholder='Write down your justification here'
            multiline={true}
            autoFocus={true}
            onChangeText={(text) => {this.setState(() => {
                    return {
                          remarksDescription: text
                    };
            })}}

            />
         </View>
         <View>
            <TouchableOpacity
            style={styles.SubmitButtonR}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={this._onPressSubmitButton}
            >
            <Text style={styles.SubmitR}>SUBMIT</Text>
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
    //justifyContent: 'center',
  },

  RemarksC:{
  //margintop:50,
  backgroundColor:"white",
  },

  Remarks:{
  //marginTop:"10%",
  color:"black",
  fontWeight:"bold",
  //fontSize:14,
  },

  inputR:{
  marginTop:10,
  padding:10,
  //borderWidth:2,
  //borderColor:'gray'
  backgroundColor:'lightgrey',
  height:200,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  },

  SubmitButtonR:{
  marginTop: 20,
  backgroundColor: "black",
  padding: 10,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  },

  SubmitR:{
  color:"white",
  fontSize:20,
  fontWeight:'bold',
  justifyContent: "center",
  textAlign: "center",
  },

});
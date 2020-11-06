import React, {useState} from 'react';
import { StyleSheet, Text,View, TextInput, Button,TouchableOpacity} from 'react-native';


export default function AddTodo({submitHandler}){

const [text, setText]= useState('');

const changeHandler=(val)=>{
    setText(val);
}

return (
	<View>
	<TextInput
      style={styles.inputadd}
      placeholder=' DD/MM/YYYY - Task Description'
      onChangeText={changeHandler}
      autoFocus={true}
      />
     <TouchableOpacity
         style={styles.CreateButton}
         onPress={()=>submitHandler(text)}
         //disabled={!this.state.isFormValid}
         >
         <Text style={styles.buttoncontent}>CREATE</Text>
     </TouchableOpacity>
	</View >
)
}

const styles = StyleSheet.create({

inputadd:{
   marginTop:5,
   padding:5,
   backgroundColor:"lightgrey",
   borderTopLeftRadius: 5,
   borderTopRightRadius: 5,
   borderBottomLeftRadius: 5,
   borderBottomRightRadius: 5,
   },

   CreateButton:{
   backgroundColor:"black",
   marginTop:10,
   alignItems:"center",
   padding:5,
   borderTopLeftRadius: 5,
   borderTopRightRadius: 5,
   borderBottomLeftRadius: 5,
   borderBottomRightRadius: 5,
   },

   buttoncontent:{
   color:"white",
   fontWeight:"bold",
   },

});
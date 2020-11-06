//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TodoItem({item, pressHandler}) {


    return(
        <View style={styles.row}>
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.callbutton} >
        <Icon name="phone" size={30} color="green" />
        </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    width:200,
    padding:16,
    //marginRight:10,
    marginTop:16,
    borderColor:"lightgrey",
    borderWidth:1,
    borderStyle:"dashed",
    borderRadius:10,
  },

  callbutton:{
  marginTop:25,
  //backgroundColor:"black",
  padding:5,
  },

  row:{
  flexDirection:"row",
  //justifyContent: 'space-between',
  },
});


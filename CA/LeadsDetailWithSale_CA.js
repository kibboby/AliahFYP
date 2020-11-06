import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
//import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import TodoItem from '../components/TodoItem.js';

export default function App({navigation}) {

  //export default class Touchables extends Component {
  //const App = () => {

  //_onPressWonButton() {
  //alert('WON')
  //leadstatus="WON"
  //}

  //_onPressLoseButton() {
  //alert('LOSE')
  //leadstatus="LOSE"
  //}

  //state={
  //leadstatus:"",
  //}

  //const [leadstatus, setleadstatus] = useState(0);
  //onst onPress = () => setleadstatus();

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: '1' },
    { text: "create an app", key: '2' },
    { text: "play on the switch", key: '3' }
  ]);

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  //render(){
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <Text style={styles.title}>LEAD'S DETAIL</Text>

          <View style={styles.row}>
            <Text style={styles.details}>Name</Text>
            <Text style={styles.info}>John Doe</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.details}>Email</Text>
            <Text style={styles.info}>abc@gmail.com</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.details}>Contact</Text>
            <Text style={styles.info}>+6 012 345 6789</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.details}>Company</Text>
            <Text style={styles.info}>ABC Company</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.details}>Interest</Text>
            <Text style={styles.info}>Website Design</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.details}>Comment</Text>
            <Text style={styles.info}></Text>
          </View>

          {/*<Text>Count: {leadstatus}</Text>*/}

          <View style={{ borderTopColor: 'black', borderTopWidth: 1, }}>
            <Text style={styles.title2}>SALESPERSON'S DETAIL</Text>
            <View style={styles.row}>
              <Text style={styles.details}>Name</Text>
              <TouchableOpacity style={styles.info}>
                <Text style={styles.info}>John David</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.WonButton} onPress={() => navigation.navigate('Reassign')}>
              <Text style={{ color: 'white' }}>RE-ASSIGN SALESPERSON</Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.title2}>TASKS</Text>

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                /*<Text>{item.text}</Text>*/
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />


          </View>

        </ScrollView>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    //justifyContent: 'space-between',
  },

  WonButton: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  LoseButton: {
    backgroundColor: "red",
    marginLeft: 10,
    alignItems: "center",
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  buttoncontent: {
    color: "grey",
    marginTop: 20,
    marginBottom: 20,
  },

  details: {
    width: "30%",
    color: "grey"
    //fontWeight:"bold",
  },

  info: {
    fontWeight: "bold",
    width: '50%',
    //borderWidth:1,
  },

  border: {
    marginTop: 10,
    borderWidth: 1,
    padding: '3%',
  },

  bordertext: {
    fontWeight: "bold",
  },

  //inputadd:{
  //marginTop:5,
  //padding:5,
  //backgroundColor:"lightgrey",
  //borderTopLeftRadius: 5,
  //borderTopRightRadius: 5,
  //borderBottomLeftRadius: 5,
  //borderBottomRightRadius: 5,
  //},

  //CreateButton:{
  //backgroundColor:"black",
  //marginTop:10,
  //alignItems:"center",
  //padding:5,
  //borderTopLeftRadius: 5,
  //borderTopRightRadius: 5,
  //borderBottomLeftRadius: 5,
  //borderBottomRightRadius: 5,
  //},

  title2: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },


  list: {
    marginTop: 20,
  },
});

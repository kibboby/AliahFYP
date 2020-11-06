//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, Text, View, Button} from 'react-native';
//import all the components we are going to use.

export default class CAPage extends Component {
  static navigationOptions = {
    headerShown:false,
  };

  

  render() {
    const { navigate } = this.props.navigation;
    var p1 =this.props.navigation.state.params.p1;
    return (
      <View style={styles.container}>
       <Text>You are on CAPage</Text>
        <Text>username is {p1}</Text>

        <Button title='Reset Password'
        onPress={() =>navigate('ressetpsw',{p1:p1})}
        />

        <Button title='SLPage'
        onPress={() =>navigate('SLPage',{p1:p1})}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
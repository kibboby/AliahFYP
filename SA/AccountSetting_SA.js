import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//export default function App() {
export default class Touchables extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={()=> this.props.navigation.navigate('Profile Settings')}
          >
            <Text style={styles.buttoncontent}>PROFILE SETTING</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={()=> this.props.navigation.navigate('Notification Settings')}
          >
            <Text style={styles.buttoncontent}>NOTIFICATION</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={()=> this.props.navigation.navigate('Change Password Settings')}
          >
            <Text style={styles.buttoncontent}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10%",
  },

  AccButton: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    width: 300,
    borderRadius: 5,
  },

  buttoncontent: {
    color: "white",
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },
});

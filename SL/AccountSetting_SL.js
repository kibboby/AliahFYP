import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, BackHandler } from 'react-native';

//export default function App() {
export default class Touchables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      designation: '',
      sales_name: '',
      sales_email: '',
      sales_contact: '',
    }
  }

  componentDidMount() {
    this.setState({
      username: this.props.route.params.username,
      designation: this.props.route.params.designation,
      sales_name: this.props.route.params.sales_name,
      sales_email: this.props.route.params.sales_email,
      sales_contact: this.props.route.params.sales_contact
    });
  }

  exit(){
    Alert.alert(
      "Exit App",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            onPress={() => this.props.navigation.navigate('Profile Settings', {
              username: this.state.username,
              designation: this.state.designation,
              sales_name: this.state.sales_name,
              sales_email: this.state.sales_email,
              sales_contact: this.state.sales_contact
            })}
          >
            <Text style={styles.buttoncontent}>PROFILE SETTING</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            onPress={() => this.props.navigation.navigate('Notification Settings')}
          >
            <Text style={styles.buttoncontent}>NOTIFICATION</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            onPress={() => this.props.navigation.navigate('ChangePassword')}
          >
            <Text style={styles.buttoncontent}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            onPress={() => this.exit()}
          >
            <Text style={styles.buttoncontent}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10%",
  },

  AccButton: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    width: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  buttoncontent: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },
});

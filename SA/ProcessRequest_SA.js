import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//export default function App() {
export default class Touchables extends Component {

  _onPressDeclineButton() {
    alert('Decline Request')
  }

  _onPressApproveButton() {
    alert('Approve Request')
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.companynameView}>
          <Text style={styles.boldtext}>COMPANY NAME</Text>

          <View style={styles.detailflexdirectionrow}>
            <Text style={styles.details}>Number of Company Admin </Text>
            <Text style={styles.amounts}> 2 </Text>
          </View>

          <View style={styles.detailflexdirectionrow}>
            <Text style={styles.details}>Number of Salesperson </Text>
            <Text style={styles.amounts}> 12 </Text>
          </View>

        </View>

        <View style={styles.companyrequestView}>
          <Text style={styles.details}>Requested Account</Text>
          <View style={styles.detailflexdirectionrow}>
            <Text style={styles.boldtext}> 2 </Text>
            <Text style={styles.boldtext}>Salesperson Account </Text>
          </View>

          <Text style={styles.details}>Comment</Text>

          <View style={styles.commentView}>
            <Text>
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s when an unknown printer took a galley of type
              and scrambled it to make a type specimen book it has?
       </Text>
          </View>

          <View style={styles.ButtonView}>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={this._onPressDeclineButton}
            >
              <Text style={styles.ButtonContent}>DECLINE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={this._onPressApproveButton}
            >
              <Text style={styles.ButtonContent}>APPROVE</Text>
            </TouchableOpacity>
          </View>
        </View>




        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%",
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  companynameView: {
    borderWidth: 3,
    padding: 5,
    borderColor: "lightgrey",
  },

  companyrequestView: {
    padding: 5,
    //borderWidth:2,
  },

  boldtext: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 20,
  },

  detailflexdirectionrow: {
    marginTop: 10,
    flexDirection: "row",
  },

  details: {
    width: 200,
    color: "grey",
  },

  amounts: {
    fontWeight: "bold",
  },

  commentView: {
    marginTop: 10,
  },

  ButtonView: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: 'center',
    padding: 10
  },

  Button: {
    margin: 10,
    backgroundColor: "black",
    padding: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 5,
  },

  ButtonContent: {
    color: "white",
    fontWeight: "bold",
  },

});

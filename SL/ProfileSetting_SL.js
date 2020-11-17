import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import ImagePicker from '../imagePicker.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      designation: '',
      sales_name: '',
      sales_email: '',
      sales_contact: '',
      image: '',
    }
    global.imageUpload = ''
  }

  componentDidMount() {
    this.setState({
      username: this.props.route.params.username,
      designation: this.props.route.params.designation,
      sales_name: this.props.route.params.sales_name,
      sales_email: this.props.route.params.sales_email,
      sales_contact: this.props.route.params.sales_contact,
    });
  }

  // _uploadImage() {
  //   RNFetchBlob.fetch('POST', 'https://poggersfyp.mooo.com/Backend/uploadImage.php', {
  //     Authorization: "Bearer access-token",
  //     otherHeader: "foo",
  //     'Content-Type': 'multipart/form-data',
  //   }, [
  //     { name: 'image', filename: 'image.png', type: 'image/png', data: imageUpload }
  //   ]).then((resp) => {
  //   }).catch((err) => {
  //   })
  // }

  _Insert_Data_Into_MySQL() {
    const url = 'https://poggersfyp.mooo.com/Backend/saveDetails_SL.php';
    fetch(url,
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
            image: imageUpload,
            username: this.state.username,
            Designation: this.state.designation,
            sales_name: this.state.sales_name,
            sales_email: this.state.sales_email,
            sales_contact: this.state.sales_contact
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);
      }).catch((error) => {
        json_last_error();
      });

    this.props.navigation.navigate("Account");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <ImagePicker style={styles.imagepicker} />
          </View>
          <Text style={styles.instruction}>Username</Text>
          <TouchableOpacity style={styles.input}>
            <Text>{this.state.username}</Text>
          </TouchableOpacity>

          <Text style={styles.instruction}>Designation</Text>
          <TextInput
            style={styles.input}
            value={this.state.designation}
            onChangeText={text => this.setState({ designation: text })}
          />

          <Text style={styles.instruction}>Name</Text>
          <TextInput
            style={styles.input}
            value={this.state.sales_name}
            onChangeText={text => this.setState({ sales_name: text })}
          />

          <Text style={styles.instruction}>Email</Text>
          <TextInput
            style={styles.input}
            value={this.state.sales_email}
            onChangeText={text => this.setState({ sales_email: text })}
          />

          <Text style={styles.instruction}>Contact</Text>
          <TextInput
            style={styles.input}
            value={this.state.sales_contact}
            onChangeText={text => this.setState({ sales_contact: text })}
          />

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this._Insert_Data_Into_MySQL()}
            >
              <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>


          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8c00',
    padding: "10%",
  },

  instruction: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },

  Button: {
    backgroundColor: "black",
    padding: 10,
    width: 130,
    borderRadius: 5,
  },

  ButtonContent: {
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
  },

});

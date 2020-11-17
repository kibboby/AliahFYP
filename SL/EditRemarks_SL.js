import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';


//export default function App() {
export default class EditRemarks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lead_id: '',
      remarks: '',
      remarksDescription: '',
    }
  }

  componentDidMount() {
    this.setState({
      lead_id: this.props.route.params.lead_id,
      remarks: this.props.route.params.remarks
    })
  }

  _Insert_Data_Into_MySQL() {
    const url = 'https://poggersfyp.mooo.com/Backend/saveRemarks.php';
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
            LD: this.state.lead_id,
            remarks: this.state.remarksDescription,
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);

      }).catch((error) => {
        console.log(error);
      });
    this.props.navigation.navigate('Dashboard');
  }


  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={styles.RemarksC}>
            <Text style={styles.Remarks}>Remarks</Text>
            <TextInput
              style={styles.inputR}
              placeholder='Write down your justification here'
              multiline={true}
              autoFocus={true}
              editable={true}
              onChangeText={text => this.setState({ remarksDescription: text })}
            />
          </View>
          <View style={{flexDirection: 'row-reverse', alignContent: 'space-around'}}>
            <TouchableOpacity
              style={styles.SubmitButtonR}
              onPress={() => { this._Insert_Data_Into_MySQL() }}
            >
              <Text style={styles.SubmitR} >Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonR}
              onPress={() => { this.props.navigation.goBack() }}
            >
              <Text style={styles.SubmitR} >Cancel</Text>
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
    backgroundColor: '#fff',
    //alignItems: 'Left',
    padding: "10%"
    //justifyContent: 'center',
  },

  RemarksC: {
    //margintop:50,
    backgroundColor: "white",
  },

  Remarks: {
    //marginTop:"10%",
    color: "black",
    fontWeight: "bold",
    fontSize:16,
  },

  inputR: {
    marginTop: 10,
    padding: 10,
    //borderWidth:2,
    //borderColor:'gray'
    backgroundColor: 'lightgrey',
    height: 200,
    borderRadius: 5,
  },

  SubmitButtonR: {
    margin: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: 130
  },

  SubmitR: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

});
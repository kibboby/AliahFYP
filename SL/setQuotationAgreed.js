import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';


//export default function App() {
export default class EditRemarks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lead_id: '',
      quote: '',
    }
  }

  componentDidMount() {
    this.setState({
      lead_id: this.props.route.params.leads_id,
    })
  }

  _Insert_Data_Into_MySQL() {
    const url = 'https://poggersfyp.mooo.com/Backend/setQuoteAgreed.php';
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
            quote: this.state.quote,

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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.RemarksC}>
            <Text style={styles.Remarks}>Quotation Agreed</Text>
            <TextInput
              style={styles.inputR}
              placeholder='Write down the amount of quotation agreed'
              autoFocus={true}
              editable={true}
              onChangeText={text => this.setState({ quote: text })}
            />
          </View>
          <View style={{flexDirection:"row", alignSelf: 'center'}}>
            <TouchableOpacity
              style={styles.SubmitButtonR}
              onPress={() => { this.props.navigation.goBack() }}
            >
              <Text style={styles.SubmitR} >Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonR}
              onPress={() => { this._Insert_Data_Into_MySQL() }}
            >
              <Text style={styles.SubmitR} >Confirm</Text>
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
    padding: "10%"
  },

  RemarksC: {
    backgroundColor: "white",
  },

  Remarks: {
    color: "black",
    fontWeight: "bold",
  },

  inputR: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
  },

  SubmitButtonR: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: '35%'
  },

  SubmitR: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

});
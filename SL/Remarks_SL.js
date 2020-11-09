import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default class Touchables extends Component {

  constructor() {
    super();
    this.state = {
      leads_id: '',
      remarksDescription: '',
    }
  }

  componentDidMount() {
    this.setState({
      leads_id: this.props.route.params.leads_id,
    })
    this.retrieveRemarks();
    this.FocusSubscription = this.props.navigation.addListener(
      'focus', () => {
        this.retrieveRemarks();
      }
    );
  }

  retrieveRemarks() {
    const url = `http://192.168.43.175:80/Backend/retrieveRemarks.php?lead_id=${encodeURIComponent(this.props.route.params.leads_id)}`;
    fetch(url, {
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          remarks: responseJson,
        });
      }).catch((error) => {
        console.log(error);
      });
  }


  render() {
    if (this.state.remarks != null) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={this.state.remarks}
              renderItem={({ item }) =>
                <View>
                  <View style={styles.RemarksC}>
                    <Text style={styles.Remarks}>Remarks</Text>
                    <TextInput
                      style={styles.inputR}
                      placeholder='Write down your justification here'
                      multiline={true}
                      autoFocus={true}
                      value={item.remarks}
                    />
                  </View>

                  <View>
                    <TouchableOpacity
                      style={styles.SubmitButtonR}
                      onPress={() => {
                        this.props.navigation.navigate('Edit Remarks',
                          {
                            lead_id: this.state.leads_id,
                            remarks: item.remarks
                          })
                      }
                      }>
                      <Text style={styles.SubmitR} >Edit Remarks</Text>
                    </TouchableOpacity>
                  </View>
                  <StatusBar style="auto" />
                </View>
              }
            />
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.RemarksC}>
              <Text style={styles.Remarks}>Remarks</Text>
              <TextInput
                style={styles.inputR}
                placeholder='Write down your justification here'
                multiline={true}
                autoFocus={true}
                editable={false}
                value={this.state.remarksDescription}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.SubmitButtonR}
                onPress={() => {
                  this.props.navigation.navigate('Edit Remarks',
                    {
                      lead_id: this.state.leads_id,
                      remarks: this.state.remarksDescription
                    })
                }
                }>
                <Text style={styles.SubmitR} >Edit Remarks</Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      )
    }
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
    //fontSize:14,
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
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5
  },

  SubmitR: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

});
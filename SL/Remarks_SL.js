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
    const url = `https://poggersfyp.mooo.com/Backend/retrieveRemarks.php?lead_id=${encodeURIComponent(this.props.route.params.leads_id)}`;
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
                    <Text style={styles.inputR}>{this.state.remarksDescription}</Text>
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
                      <Text style={styles.SubmitR} >Edit</Text>
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
        <ScrollView style={{backgroundColor: '#ff8c00'}}>
          <View style={styles.container}>
            <View style={styles.RemarksC}>
              <Text style={styles.Remarks}>Remarks</Text>
              <Text style={styles.inputR}>No remarks yet!</Text>
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
                <Text style={styles.SubmitR}>Edit</Text>
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
    fontSize:16,
  },

  inputR: {
    marginTop: 10,
    padding: 10,
    //borderWidth:2,
    borderColor:'gray',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },

  SubmitButtonR: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: 130,
    alignSelf: 'flex-end'
  },

  SubmitR: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

});
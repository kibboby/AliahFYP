import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View, TextInput, Switch, ScrollView, StackScreen } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";


export default class callTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      time: "",
      notes: "",
      task_id: '',
    }
  }

  componentDidMount() {
    this.setState({
      task_id: this.props.route.params.task_id
    });
    this._TaskDetails();
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  _TaskDetails() {
    return fetch(`https://poggersfyp.mooo.com/Backend/retrieveTaskDetails.php?task_id=${encodeURIComponent(this.props.route.params.task_id)}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  _Insert_Data_Into_MySQL() {
    const url = 'https://poggersfyp.mooo.com/Backend/editAppointmentTaskDetails.php';
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
            task_id: this.state.task_id,
            task_time: this.state.time,
            task_date: this.state.date,
            task_location: this.state.location,
            task_comments: this.state.notes,
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);
        this.props.navigation.navigate('Lead Detail')
      }).catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <Text style={styles.Title}>Date:</Text>
                  <DatePicker
                    style={{ width: 300 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
              minDate="09/11/2020"
              maxDate="09/11/2040"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    value={this.state.date}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                  />
                </View>
                <View style={Timestyles.container}>
                  <Text style={Timestyles.text}>Time: {this.state.time}</Text>
                  <TouchableOpacity
                    onPress={() => this.TimePicker.open()}
                    style={Timestyles.button}
                  >
                    <Text style={Timestyles.buttonText}>TIME</Text>
                  </TouchableOpacity>
                  <TimePicker
                    ref={ref => {
                      this.TimePicker = ref;
                    }}
                    value={this.state.time}
                    onCancel={() => this.onCancel()}
                    onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                  />
                </View>

                <View>
                  <Text style={Timestyles.text2}>Location</Text>
                  <TextInput
                    style={styles.commentSection}
                    placeholderTextColor="black"
                    placeholder='Comment Here'
                    multiline={true}
                    numberOfLines={4}
                    width="100%"
                    value={this.state.location}
                    onChangeText={text => this.setState({ location: text })} />
                  <StatusBar style="auto" />
                </View>
                <View>
                  <Text style={styles.allDay}>Notes</Text>
                  <TextInput
                    style={styles.commentSection}
                    placeholderTextColor="black"
                    placeholder='Comment Here'
                    multiline={true}
                    value={this.state.notes}
                    numberOfLines={4} />
                  <StatusBar style="auto" />
                </View>
                <View>
                  <TouchableOpacity onPress={() => this._Insert_Data_Into_MySQL()}>
                    <Text style={buttonStyles.text}>
                      Done
            </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style={buttonStyles.text}>
                      Cancel
            </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }} />
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10%"

  },

  Title: {
    fontSize: 16,
    marginTop: 50,
    margin: 8,
  },

  allDay: {
    fontSize: 16,
    marginTop: 20,
    margin: 8,
  },

  commentSection: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    margin: 10,
    width: 500,
  }

});

const containerStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: 'row'
  },
  colContainer: {
    flexDirection: 'column'
  }
});


const buttonStyles = StyleSheet.create({
  text: {
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center'
  }
})

const Timestyles = StyleSheet.create({
  container: {
    margin: 10
  },

  text: {
    fontSize: 16,
    marginTop: 20,

  },

  text2: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 10
  },
  button: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600"
  },
});
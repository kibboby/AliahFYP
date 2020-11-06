import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Switch, ScrollView, StackScreen } from 'react-native';
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

  componentDidMount(){
    this.setState({
        task_id: this.props.route.param.task_id
    });
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  _Insert_Data_Into_MySQL() {
    const url = 'http://localhost/Backend/editCallTaskDetails.php';
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
      <View style={styles.allview}>
        <ScrollView>
          <View>
            <Text style={styles.Title}>Date: </Text>
            <TextInput
              style={{ height: 40, margin: 8, borderColor: 'black', borderWidth: 1 }}
              placeholder="DD/MM/YYYY"
              value={this.state.date}
              onChangeText={text => this.setState({ date: text })} />
          </View>
          <View style={Timestyles.container}>
            <Text style={Timestyles.text}>Time: {this.state.time}</Text>
            <TouchableOpacity
              onPress={() => this.TimePicker.open()}
              style={Timestyles.button}
            >
              <Text style={Timestyles.buttonText}>TIME </Text>
            </TouchableOpacity>
            <TimePicker
              ref={ref => {
                this.TimePicker = ref;
              }}
              onCancel={() => this.onCancel()}
              onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
              value={this.state.time}
            />
          </View>
          
          <View >
            <Text style={styles.allDay}>Notes </Text>
            <TextInput
              style={styles.commentSection}
              placeholderTextColor="black"
              placeholder='Comment Here'
              multiline={true}
              numberOfLines={4}
              width="100%"
              value={this.state.notes}
              onChangeText={text => this.setState({ notes: text })} />
            <StatusBar style="auto" />
          </View>
          <View>
            <TouchableOpacity onPress={() => this._Insert_Data_Into_MySQL()} >
              <Text style={buttonStyles.text}>
                Done
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.navigation.navigate('Call Task Detail')}>
              <Text style={buttonStyles.text}>
                Cancel
            </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );

  }

}


const styles = StyleSheet.create({

  allview: {
    flex: 1,
    padding: "10%",
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

  },

  Title: {
    fontSize: 30,
    marginTop: 50,
    margin: 8,
  },

  allDay: {
    fontSize: 30,
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
    fontSize: 30,
    marginTop: 20,

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
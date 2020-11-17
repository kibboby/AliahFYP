import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Switch, StackScreen } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

export default class appointmentTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      time: "",
      notes: "",
      leads_name: '',
      sales_username: '',
      // location: '',
      // cm: moment().format("MM"),
      // cy: moment().format("YYYY"),
      // currentDay: moment().format('DD'),
      // date: moment(cy.cm.currentDay).format('YYYY-MM-DD'),
      // dateOne : moment([CurrentYear, CurrentMonth, currentDay])
    }
  }

  componentDidMount() {
    this.setState({
      leads_name: this.props.route.params.leads_name,
      sales_username: this.props.route.params.sales_username
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
    const url = 'https://poggersfyp.mooo.com/Backend/CreateAppointmentTask.php';
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
            leads_name: this.props.route.params.leads_name,
            salesperson_username: this.state.sales_username,
            task_time: this.state.time,
            task_date: this.state.date,
            task_comments: this.state.notes,
            task_location: this.state.location
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);

      }).catch((error) => {
        console.log(error);
      });
    this.props.navigation.navigate('Lead Detail')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
    <Text>{this.state.date}{this.state.time}</Text>
          <View>
            <Text style={styles.Title}>Date:</Text>
            <DatePicker
              style={{ width: 300 }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="14/11/2020"
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
              }}
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
              numberOfLines={4} />
            <StatusBar style="auto" />
          </View>
          <View>
            <TouchableOpacity onPress={() => {
              if(this.state.time != null && this.state.date != null){
              this._Insert_Data_Into_MySQL()} 
              else{
                Alert.alert("Please enter the date and time!");
              }}}>
              <Text style={buttonStyles.text}>
                Done
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Text style={buttonStyles.text}>
                Cancel
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: '#fff',
  },

  Title: {
    fontSize: 16,
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
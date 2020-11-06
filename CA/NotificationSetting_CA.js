import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
//import TimePicker from 'react-time-picker';
import TimePicker from "react-native-24h-timepicker";
import Icon from 'react-native-vector-icons/Entypo';

//export default function App() {
export default class App extends React.Component {

//const App = () => {
  //const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  /////const [isSwitchEnabled,setSwitch]=React.useState(false)
  //}

  constructor() {
    super();
    this.state = {
      time: ""
    };
  }
 
  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }


 render(){
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={styles.textV}>
      <Text style={styles.text}>Mute Appointment Reminder</Text>
      </View>
      <Switch
        //value={isSwitchEnabled}
        //onValueChange={(value)=> setSwitch(value)}
      />
      </View>

      <Text style={styles.reminder}>Reminder Time</Text>


        <View style={Timestyles.container}>
        <Text style={Timestyles.text}> {this.state.time}</Text>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={Timestyles.button}
        >
          <Icon name="clock" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
     

      <View style={styles.row2}>
      <View style={styles.textV}>
      <Text style={styles.text}>Mute Newly Assigned Lead Notification</Text>
      </View>
      <Switch
        //value={isSwitchEnabled}
        //onValueChange={(value)=> setSwitch(value)}
      />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:"10%",
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  textV:{
  width:"80%",
  //backgroundColor:"red",
  },

  text:{
  fontWeight:"bold",
  },

  row: {
  flexDirection:"row",
  //justifyContent: 'space-between',
  },

  reminder:{
  marginTop:20,
  marginBottom:10,
  fontSize:30,
  fontWeight:"bold",
  },

  row2:{
  flexDirection:"row",
  marginTop:20,
  },



  })

  const Timestyles = StyleSheet.create({
  container:{
   flexDirection:"row",
  },

  text: {
    fontSize: 20,
    //marginTop: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width:"50%",
    padding:10,
    backgroundColor:"lightgrey",
    
  },
  button: {
    backgroundColor: "#D3D3D3",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding:5,
  
  },
  

});

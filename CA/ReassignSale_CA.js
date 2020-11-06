import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/entypo';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//export default function App() {
export default class Touchables extends Component {

  _onPressCancelButton() {
    alert('Cancel Salesperson')
  }

  _onPressAddButton() {
    alert('Add Salesperson')
  }

  _onPressConfirmButton() {
    alert('Confirm Assigned')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Department</Text>
        <View style={styles.dropdowndepartment}>
          <DropDownPicker
            items={[
              { label: 'Human Resources', value: 'Human Resourcces', icon: () => <Icon name="users" size={18} color="grey" /> },
              { label: 'Marketing', value: 'Marketing', icon: () => <Icon name="shopping-cart" size={18} color="grey" /> },
              { label: 'IT', value: 'IT', icon: () => <Icon name="desktop" size={18} color="grey" /> },
              { label: 'Design', value: 'Design', icon: () => <Icon name="paint-brush" size={18} color="grey" /> },
            ]}
            //defaultValue={this.state.country}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            //onChangeItem={item => this.setState({
            //DepartmentChoice: item.value
            //})}
            placeholder="Select Department"
          />
        </View>

        <View style={styles.salesrow}>
          <Text style={styles.text}>Salesperson </Text>
          <Text style={styles.text}>1 </Text>
        </View>
        <View style={styles.dropdownsalesperson}>
          <DropDownPicker
            items={[

              { label: 'Wee Chien', value: 'WeeChien', icon: () => <Icon name="user" size={18} color="grey" /> },
              { label: 'Aliah', value: 'Aliah', icon: () => <Icon name="user" size={18} color="grey" /> },
              { label: 'Cheyenne', value: 'IT', icon: () => <Icon name="user" size={18} color="grey" /> },
            ]}
            //defaultValue={this.state.country}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            //onChangeItem={item => this.setState({
            //DepartmentChoice: item.value
            //})}
            placeholder="Select Salesperson"
          />
        </View>

        <View style={styles.salesrow}>
          <Text style={styles.text}>Salesperson </Text>
          <Text style={styles.text}>2 </Text>
        </View>
        <View style={styles.dropdownsalespersonextra}>
          <DropDownPicker
            items={[
              { label: 'Wee Chien', value: 'WeeChien', icon: () => <Icon name="user" size={18} color="grey" /> },
              { label: 'Aliah', value: 'Aliah', icon: () => <Icon name="user" size={18} color="grey" /> },
              { label: 'Cheyenne', value: 'IT', icon: () => <Icon name="user" size={18} color="grey" /> },
            ]}
            //defaultValue={this.state.country}
            containerStyle={{ height: 40, width: 200 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            //onChangeItem={item => this.setState({
            //DepartmentChoice: item.value
            //})}
            placeholder="Select Salesperson"
          />

          <TouchableOpacity>
            <Icon name="remove" size={39} color="red" onPress={this._onPressCancelButton} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.AddButton}
          //disabled={!this.state.isFormValid}
          >
            <Text style={styles.Add}>+ SALES PERSON</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              style={styles.ConfirmButton}
              onPress={() => this.props.navigation.navigate('Lead Detail')}
            //disabled={!this.state.isFormValid}
            >
              <Text style={styles.Confirm}>CONFIRM</Text>
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
    padding: '10%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  dropdowndepartment: {
    marginTop: 10,
    zIndex: 1000,
  },

  salesrow: {
    flexDirection: "row",
    marginTop: 10,
  },

  dropdownsalesperson: {
    marginTop: 10,
    zIndex: 999,
  },

  dropdownsalespersonextra: {
    marginTop: 10,
    flexDirection: "row",
    zIndex: 900,
  },

  AddButton: {
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    width: "50%",
  },

  Add: {
    color: "white",
    fontWeight: "bold",
  },

  text: {
    color: "black",
    fontWeight: "bold",
  },

  ConfirmButton: {
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },

  Confirm: {
    color: "white",
    fontWeight: "bold",
  },
});

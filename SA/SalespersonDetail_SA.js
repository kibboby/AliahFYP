import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ListofCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LeadList: [
        { Leads: 'Facebook', Company: 'Facebook Co', Status: 'Won' }
        , { Leads: 'Facebook', Company: 'Facebook Co', Status: 'Lost' }
      ],
    }
  }

  //to be further implemented by onPress function to go to company's detail page
  getLeadsData = (item) => {
    //var RollNo = item.RollNo;
    //var StudentName = item.StudentName;
    //var Course = item.Course;

    //alert(RollNo + "\n" + StudentName + "\n" + Course);
  }

  //to implement changing between pages
  _onPressButton() {
    //alert('You tapped the button!')
  }

  render() {
    return (

      <View style={{ flex: 1, padding: "10%" }}>

        <Text style={styles.Name}>John David</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Salesperson Detail')}
            style={styles.cardActive}>
            <Text style={styles.activeTitle}>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Salesperson Report')}
            style={styles.nav}>
            <Text style={styles.navTitle}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Salesperson Leads')}
            style={styles.nav}>
            <Text style={styles.navTitle}>Leads</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.Direction}>
            <View style={styles.Text}>
              <Text style={styles.TextMargin}>Name</Text>
              <Text style={styles.TextMargin}>Designation</Text>
              <Text style={styles.TextMargin}>Company</Text>
              <Text style={styles.TextMargin}>Email</Text>
              <Text style={styles.TextMargin}>Contact</Text>
            </View>

            <View style={styles.Info}>
              <Text style={styles.TextMargin}>John David Beckham</Text>
              <Text style={styles.TextMargin}>Salesperson</Text>
              <Text style={styles.TextMargin}>Facebook</Text>
              <Text style={styles.TextMargin}>abc@gmail.com</Text>
              <Text style={styles.TextMargin}>+6 012 345 6789</Text>
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  nav: {
    margin: 5,
    backgroundColor: 'lightgrey',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
    width: '20%'
  },
  navTitle: {
    fontSize: 12
  },
  cardActive: {
    margin: 5,
    backgroundColor: 'black',
    padding: 5,
    width: '20%',
    textAlign: 'center',
    borderRadius: 5
  },
  activeTitle: {
    color: 'white',
    fontSize: 12
  },
  Name: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10
  },
  Username: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
  },
  designation: {
    marginLeft: 15,
    fontSize: 12,
  },
  Info: {
    marginTop: 2.5,
    marginStart: 35,
    fontSize: 14,
  },
  Text: {
    marginTop: 2.5,
    marginLeft: 15,
    fontSize: 14,
  },
  TextMargin: {
    marginBottom: 5
  },
  Direction: {
    flexDirection: 'row',
    marginTop: 10
  },
});
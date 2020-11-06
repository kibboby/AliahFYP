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
      <ScrollView>
        <View style={{ flex: 1, padding: "10%" }}>

          <Text style={styles.CompanyName}>ABC Company</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Company Details')}
              style={styles.nav}>
              <Text style={styles.navTitle}>Company Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Company Report')}
              style={styles.nav}>
              <Text style={styles.navTitle}>Company Report</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Company Leads')}
              style={styles.cardActive}>
              <Text style={styles.activeTitle}>Company Leads</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.header}>
            <Text style={styles.firstCol}>Leads</Text>
            <Text style={styles.SecCol}>Remarks</Text>
          </View>
          <FlatList
            data={this.state.LeadList}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Lead Detail')}>
                <View style={styles.cardView}>
                  <Text style={styles.firstCol}>{item.Leads}    ({item.Company})</Text>
                  <Text style={styles.SecCol}>{item.Status}</Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  nav: {
    margin: 5,
    backgroundColor: 'lightgrey',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5
  },
  navTitle: {
    fontSize: 12
  },
  cardActive: {
    margin: 5,
    backgroundColor: 'black',
    padding: 5,
    width: '25%',
    textAlign: 'center',
    borderRadius: 5
  },
  activeTitle: {
    color: 'white',
    fontSize: 12
  },
  CompanyName: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10
  },
  cardView: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    textAlign: 'center'
  },
  header: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: 'lightgrey',
    marginTop: 10
  },
  SecCol: {
    fontSize: 12,
    width: '40%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  firstCol: {
    fontSize: 12,
    width: '60%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  }
});
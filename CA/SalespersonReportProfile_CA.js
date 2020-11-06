import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListofCompany extends Component {
  constructor(props) {
    super(props);

  }

  //to be further implemented by onPress function to go to company's detail page
  getLeadsData = (item) => {
    //var RollNo = item.RollNo;
    //var StudentName = item.StudentName;
    //var Course = item.Course;

    //alert(RollNo + "\n" + StudentName + "\n" + Course);
  }


  render() {
    return (
      <View style={{ flex: 1, padding: "10%" }}>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Salespersons Profile')}
            style={styles.active}>
            <Text style={styles.navTitle, styles.activeTitle}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Salespersons Leads')}
            style={styles.nav}>
            <Text style={styles.navTitle}>Lead's Assigned</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.Icon}>
          <Icon
            name='user'
            size={45}
            style={styles.profileImg} />
          <View>
            <Text style={styles.Username}>
              John David
                    </Text>
            <Text style={styles.designation}>
              Salesperson
                    </Text>
          </View>
        </View>

        <View>
          <View style={styles.Direction}>
            <Text style={[styles.Text, { marginEnd: 25 }]}>Email</Text>
            <Text style={styles.Info}>abc@gmail.com</Text>
          </View>
          <View style={styles.Direction}>
            <Text style={[styles.Text, { marginEnd: 8 }]}>Contact</Text>
            <Text style={styles.Info}>+6 012 345 6789</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>LEADS REPORT</Text>
          <View style={styles.Direction}>
            <Text style={styles.Text}>Total Number of Leads Assigned</Text>
            <Text style={styles.No}>100</Text>
          </View>
          <View style={styles.Direction}>
            <Text style={styles.WonLeadNo}>Total Number of Won Leads</Text>
            <Text style={styles.No}>80</Text>
          </View>
          <View style={styles.Direction}>
            <Text style={styles.LostLeadNo}>Total Number of Lost Leads</Text>
            <Text style={styles.No}>20</Text>
          </View> 
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  nav: {
    margin: 5,
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingTop: 5,
    width: '30%',
    textAlign: 'center',
    borderRadius: 5
  },
  navTitle: {
    fontSize: 12
  },
  active: {
    margin: 5,
    backgroundColor: 'black',
    padding: 5,
    paddingTop: 5,
    width: '20%',
    textAlign: 'center',
    borderRadius: 5
  },
  activeTitle: {
    color: 'white',
    fontSize: 12
  },
  profileImg: {
    borderRadius: 50,
    marginStart: 10,
    marginTop: 2.5,
    height: 55,
    width: 55,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    paddingStart: 11,
    paddingTop: 2
  },
  Username: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 16,
  },
  designation: {
    marginLeft: 15,
    fontSize: 10,
  },
  Icon: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Direction: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'baseline',
  },
  Text: {
    marginTop: 2.5,
    marginLeft: 15,
    fontSize: 14,
    marginBottom: 5,
    fontSize: 12,
    color: 'grey'
  },
  Info: {
    width: 200,
    marginTop: 2.5,
    marginStart: 35,
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 10,
    marginTop: 15
  },
  No:{
    //width: 200,
    marginTop: 2.5,
    marginStart: 35,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'lightgrey',
    width: 120,
    textAlign: 'center',
    borderRadius: 5,
    padding: 5
  },
  WonLeadNo:{
    marginRight: 23,
    marginTop: 2.5,
    marginLeft: 15,
    fontSize: 14,
    marginBottom: 5,
    fontSize: 12,
    color: 'grey'
  },
  LostLeadNo:{
    marginRight: 24,
    marginTop: 2.5,
    marginLeft: 17,
    fontSize: 14,
    marginBottom: 5,
    fontSize: 12,
    color: 'grey'
  }
});
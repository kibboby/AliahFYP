import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeadList: [
        { Leads: 'Facebook', CompanyName: 'Facebook Co', Status: 'Won' }
        , { Leads: 'Facebook', CompanyName: 'Facebook Co', Status: 'Lost' }
      ],
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Overall Report')}
            style={styles.nav}>
            <Text style={styles.navTitle}>Overall Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('List of Company')}
            style={styles.nav}>
            <Text style={styles.navTitle}>Company Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=> this.props.navigation.navigate('List of Salesperson')}
            style={styles.nav}>
            <Text style={styles.navTitle}>Salesperson Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('List of Leads')}
            style={styles.cardActive}>
            <Text style={styles.activeTitle}>Leads Report</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.firstCol}>Leads</Text>
          <Text style={styles.SecThirdCol}>Status</Text>
        </View>
        <FlatList
          data={this.state.LeadList}
          renderItem={({ item }) =>
            <View style={styles.cardView}>
              <Text style={styles.firstCol} onPress={() => this.props.navigation.navigate('Lead Detail')}>{item.Leads}   ({item.CompanyName})</Text>
              <Text style={styles.SecThirdCol} onPress={() => this.props.navigation.navigate('Lead Detail')}>{item.Status}</Text>
            </View>
          }
        />
      </ScrollView>
    )
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
    backgroundColor: 'black',
    width: '25%',
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
    padding: 5
  },
  activeTitle: {
    color: 'white',
    fontSize: 12
  },
  container: {
    flex: 1,
    padding: "10%",
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
    backgroundColor: 'lightgrey'
  },
  SecThirdCol: {
    fontSize: 12,
    width: '35%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  firstCol: {
    fontSize: 12,
    width: '40%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  }
});
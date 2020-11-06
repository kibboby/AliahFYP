import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableNativeFeedbackComponent } from 'react-native';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeadList: [
        { Leads: 'Facebook', Company: 'Facebook Co.', Contacted: 'Yes', QuoteSent: 'RM1000', Status: 'Won' }
        , { Leads: 'Facebook', Company: 'Facebook Co.',Contacted: 'Yes', QuoteSent: ' - ', Status: 'Lost' }
      ],
      NotificationList: [
        { No: '2' }
      ]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>NOTIFICATION</Text>
        <Card style={{ backgroundColor: 'lightgrey', margin: 5, padding: 5 }} onPress={() => this.props.navigation.navigate('List Unassigned Leads')}>
          <View style={{ backgroundColor: 'lightgrey', flexDirection: 'row' }}>
            <Icon name="exclamationcircleo" size={15} color="red" style={styles.icon} />
            <Text style={{ flex: 1 }}>2 New Incoming Leads</Text>
            <View style={{ justifyContent: "flex-end" }}>
              <Icon name="right" size={15} style={styles.icon}/> 
            </View>
          </View>
        </Card>
        <Text style={styles.title}>LEADS</Text>
        <View style={styles.header}>
          <Text style={styles.firstCol}>Leads</Text>
          <Text style={styles.SecCol}>Contacted</Text>
          <Text style={styles.SecCol}>Quote Sent</Text>
          <Text style={styles.SecCol}>Won / Lost</Text>
        </View>
        <FlatList
          data={this.state.LeadList}
          renderItem={({ item }) =>
            <View style={styles.cardView}>
              <Text style={styles.firstCol} onPress={() => this.props.navigation.navigate('Lead Detail')}>{item.Leads} ({item.Company})</Text>
              <Text style={styles.SecCol}>{item.Contacted}</Text>
              <Text style={styles.SecCol}>{item.QuoteSent}</Text>
              <Text style={styles.SecCol} onPress={() => this.props.navigation.navigate('Remarks')}>{item.Status}</Text>
            </View>
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10%",
    //paddingTop: 30,
    backgroundColor: '#fff',
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
    backgroundColor: 'lightgrey'
  },
  SecCol: {
    fontSize: 12,
    width: '22%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  firstCol: {
    fontSize: 12,
    width: '30%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 5,
    marginBottom: 10,
    marginTop: 10
  },
  icon: {
    paddingTop: 3,
    paddingLeft: 5,
    textAlign: 'right',
    paddingRight: 5
  }
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyList: [
        { Company: 'Facebook' },
        { Company: 'Google' },
        { Company: 'Android' }
      ]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <FlatList
          data={this.state.CompanyList}
          renderItem={({ item }) =>
            <Card style={styles.cardView} onPress={() => this.props.navigation.navigate('Request')}>
              <View style={styles.LeadIcon}>
                <Text style={{ flex: 1 }}>{item.Company} sent a a request for additional account(s)</Text>
                <View style={{ justifyContent: "flex-end" }}>
                  <Icon name="right" size={15} style={styles.icon}/>
                </View>
              </View>
            </Card>
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:"10%",
    //padding: 16,
    //paddingTop: 30,
    backgroundColor: '#fff',
    marginTop: 10
  },
  cardView: {
    backgroundColor: 'lightgrey',
    margin: 5,
    padding: 5
  },
  icon: {
    paddingTop: 3,
    paddingLeft: 5,
    textAlign: 'right',
    paddingRight: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 5,
    marginBottom: 10,
    marginTop: 10
  },
  LeadIcon: {
    backgroundColor: 'lightgrey', 
    flexDirection: 'row',
    padding: 5
  }
});
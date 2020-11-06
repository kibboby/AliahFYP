import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      leads_name: '',
      sales_username: 'Mr Pimple'
    }
  }

  componentDidMount() {
    this._populateDashboard();
    this.FocusSubscription = this.props.navigation.addListener(
      'focus', () => {
        this._populateDashboard();
      }
    );
  }

  _populateDashboard() {
    return fetch('http://192.168.43.175:80/Backend/PopulateSalesDashboard.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      }).catch((error) => {
        console.error(error);
      });
  }

  navigateToDetail(lN, SN) {
    this.props.navigation.navigate('Lead Detail',
      {
        leads_name: lN,
        sales_username: SN,
      })
  }

  navigateToRemarks(LD) {
    this.props.navigation.navigate('Remarks',
      {
        leads_id: LD
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.firstCol}>Leads</Text>
          <Text style={styles.SecCol}>Contacted</Text>
          <Text style={styles.SecCol}>Quote Sent</Text>
          <Text style={styles.SecCol}>Won / Lost</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={styles.cardView}>
              <Text style={styles.firstCol} onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}>{item.lead_name}   ({item.lead_company})</Text>
              <Text style={styles.SecCol} onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}>{item.Contacted}</Text>
              <Text style={styles.SecCol} onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}>{item.remarks}</Text>
              <Text style={styles.SecCol} onPress={() => this.navigateToRemarks(item.lead_id)}>{item.status}</Text>
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
    padding: 16,
    paddingTop: 30,
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
    width: '23%',
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
  }
});
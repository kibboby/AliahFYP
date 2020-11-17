import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, 
  FlatList, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales_username: ''
    }
  }

  componentDidMount() {
    this._retrieveLeadsTaskList();
    this.FocusSubscription = this.props.navigation.addListener(
      'focus', () => {
        this._retrieveLeadsTaskList();
      }
    )
  }

  _retrieveLeadsTaskList() {
    const encodedValue = {
      encodedSalesName: this.props.sales_username
    }
    return fetch(`https://poggersfyp.mooo.com/Backend/retrieveCompletedTask.php?sales_username=${encodeURIComponent(this.state.sales_username)}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          TaskList: responseJson,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  redirectTaskDetailPage(taskType, taskId) {
    if (taskType == "Call") {
      this.props.navigation.navigate('Call Task Detail',
        {
          leads_name: this.state.leads_name,
          sales_username: this.state.sales_username,
          task_Id: taskId
        })
    } else if (taskType == "Appointment") {
      this.props.navigation.navigate('Appointment Task Detail',
        {
          leads_name: this.state.leads_name,
          sales_username: this.state.sales_username,
          task_Id: taskId
        })
    } else {
      this.props.navigation.navigate('Other Task Detail',
        {
          leads_name: this.state.leads_name,
          sales_username: this.state.sales_username,
          task_Id: taskId
        })
    }
  }

  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container}>
          <Text style={styles.title}>TASK HISTORY</Text>
          <SafeAreaView>
            <FlatList
              data={this.state.TaskList}
              renderItem={({ item }) => {
                return (
                  <Card style={styles.card}>
                    <View style={styles.Task}>
                      <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                        this.redirectTaskDetailPage(item.task_title, item.task_id)
                      }}>
                        <View style={styles.TaskCompleted}>
                          <Text style={styles.Type}>{item.task_title}</Text>
                          <Text style={styles.Date}> | </Text>
                          <Text style={styles.Date}>{item.task_date}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Card>
                )
              }
              }
            />
          </SafeAreaView>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 5,
    marginBottom: 5
  },
  TaskTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginTop: 20,
    marginStart: 15,
    fontWeight: 'bold'
  },
  Date: {
    marginStart: 5,
  },
  card: {
    margin: 5,
    borderRadius: 10,
  },
  TaskCompleted: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 10,
    flex: 1,
    borderRadius: 10,
  }
});

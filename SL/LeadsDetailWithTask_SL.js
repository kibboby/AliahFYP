import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  StyleSheet, Text, Switch, View, TouchableOpacity, Alert, SafeAreaView,
  ScrollView, FlatList
} from 'react-native';
import { Card } from 'react-native-paper';
import ModalSelector from 'react-native-modal-selector'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leads_name: '',
      textInputValue: '',
      sales_username: '',
      lead_contact: '',
      task_id: '',
      leads_status: '',
      currentDay: moment().format('D'),
      CurrentMonth: moment().format("MM"),
      CurrentYear: moment().format("YYYY"),
      diffDate: ''
    }
  }

  componentDidMount() {
    this.setState({
      leads_name: this.props.route.params.leads_name,
      sales_username: this.props.route.params.sales_username
    });
    this.LeadsDetailsItem();
    this._retrieveLeadsTaskList();
    this.FocusSubscription = this.props.navigation.addListener(
      'focus', () => {
        this.LeadsDetailsItem();
        this._retrieveLeadsTaskList();
      }
    )
  }

  LeadsDetailsItem() {
    return fetch('http://localhost:80/Backend/leadsDetails.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
      }).catch((error) => {
        console.error(error);
      });
  }

  _retrieveLeadsTaskList() {
    const encodedValue = {
      encodedName: this.props.route.params.leads_name,
      encodedSalesName: this.props.route.params.sales_username
    }
    return fetch(`http://localhost/Backend/retrieveLeadsTaskList.php?lead_name=${encodeURIComponent(encodedValue.encodedName)}&sales_username=${encodeURIComponent(encodedValue.encodedSalesName)}`)
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

  _updateTask(task_id) {
    const url = 'http://localhost/Backend/updateTaskStatus.php';
    fetch(url,
      {
        method: 'POST',
        headers:
        {
          'Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id: task_id
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);
      }).catch((error) => {
        console.log(error)
      });
    this.props.navigation.navigate("Lead Detail");
  }

  _deleteTask(task_id) {
    const url = 'http://localhost/Backend/deleteTask.php';
    fetch(url,
      {
        method: 'POST',
        headers:
        {
          'Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id: task_id
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);
      }).catch((error) => {
        console.log(error)
      });
    this.props.navigation.navigate("Lead Detail");
  }

  _updateLeadStatus(leadsID, updatedStatus) {
    const url = 'http://localhost/Backend/updateLeadStatus.php';
    fetch(url,
      {
        method: 'POST',
        headers:
        {
          'Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id: leadsID,
            status: updatedStatus
          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        alert(responseJsonFromServer);
      }).catch((error) => {
        console.log(error)
      });
    this.props.navigation.navigate("Lead Detail");
  }

  createStatusWonAlert(leads_id) {
    Alert.alert(
      "Confirmation",
      "Change lead's status from OPEN to WON",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: 'Confirm', onPress: () => this._updateLeadStatus(leads_id, "Won") }
      ],
      { cancelable: false }
    );
  }

  createStatusLoseAlert(leads_id) {
    Alert.alert(
      "Confirmation",
      "Change lead's status from OPEN to LOSE",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: 'Confirm', onPress: () => this._updateLeadStatus(leads_id, "Lose") }
      ],
      { cancelable: false }
    );
  }

  createDeleteAlert(task_id) {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: 'Delete', onPress: () => this._deleteTask(task_id) }
      ],
      { cancelable: false }
    );
  }

  createCompletionAlert(task_id) {
    Alert.alert(
      "Confirmation",
      "Confirmation for completion of task",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: 'Confirm', onPress: () => this._updateTask(task_id) }
      ],
      { cancelable: false }
    );
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

  validateDate(taskDate) {
    var day = taskDate.substr(0, 2);
    var Month = taskDate.substr(3, 2);
    var Year = taskDate.substr(6, 9);
    var dateOne = moment([this.state.CurrentYear, this.state.CurrentMonth, this.state.currentDay]);
    var dateTwo = moment([Year, Month, day]);
    var result = dateTwo.diff(dateOne, 'days');
    this.state.diffDate = result;
  }

  render() {
    const encodedValue = {
      leads_name: this.state.leads_name,
      sales_username: this.state.sales_username
    }
    let index = 0;
    const data = [
      { key: index++, section: true, label: 'Select Task' },
      { key: index++, label: 'Call' },
      { key: index++, label: 'Appointment' },
      { key: index++, label: 'Other' },
    ];
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>LEAD'S DETAIL</Text>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => {
                this.state.leads_status = item.status;
                if (item.status == "Open") {
                  return (
                    <View>
                      <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.WonButton}
                          onPress={() => {this.createStatusWonAlert(item.lead_id)}}
                        >
                          <Text style={styles.buttoncontent}>WON</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.LoseButton}
                        //onPress={this.createStatusLoseAlert}
                        //disabled={!this.state.isFormValid}
                        >
                          <Text style={styles.buttoncontent}>LOSE</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }

                else if (item.status == "Won") {
                  return (
                    <View>
                      <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.WonButton}
                        >
                          <Text style={styles.buttoncontent}>WON</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }

                else if (item.status == "Lose") {
                  return (
                    <View>
                      <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.LoseButton}
                        >
                          <Text style={styles.buttoncontent}>LOSE</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }
              }
              }
            />

            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => {
                if (this.state.leads_status == "Open") {
                  return (
                    <View>
                      <View style={styles.row}>
                        <Text style={styles.details}>Name</Text>
                        <Text style={styles.info} >{item.lead_name}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Email</Text>
                        <Text style={styles.info}>{item.lead_email}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Contact</Text>
                        <Text style={styles.info}>{item.lead_contact}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Company</Text>
                        <Text style={styles.info}>{item.lead_company}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Interest</Text>
                        <Text style={styles.info}>{item.interest}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Comment</Text>
                        <Text style={styles.info}>{item.comments}</Text>
                      </View>

                      <ModalSelector
                        data={data}
                        initValue="Create New Task"
                        onChange={(option) => {
                          if (option.label == "Call") {
                            this.props.navigation.navigate('Call Task Detail',
                              {
                                leads_name: this.state.leads_name,
                                sales_username: this.state.sales_username
                              })
                          } else if (option.label == "Appointment") {
                            this.props.navigation.navigate('Create Appointment Task',
                              {
                                leads_name: this.state.leads_name,
                                sales_username: this.state.sales_username
                              })
                          }
                          else {
                            this.props.navigation.navigate('Create Other Task',
                              {
                                leads_name: this.state.leads_name,
                                sales_username: this.state.sales_username
                              })
                          }
                        }} />

                    </View>
                  )
                }

                else if (this.state.leads_status != "Open") {
                  return (
                    <View>
                      <View style={styles.row}>
                        <Text style={styles.details}>Name</Text>
                        <Text style={styles.info} >{item.lead_name}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Email</Text>
                        <Text style={styles.info}>{item.lead_email}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Contact</Text>
                        <Text style={styles.info}>{item.lead_contact}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Company</Text>
                        <Text style={styles.info}>{item.lead_company}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Interest</Text>
                        <Text style={styles.info}>{item.interest}</Text>
                      </View>

                      <View style={styles.row}>
                        <Text style={styles.details}>Comment</Text>
                        <Text style={styles.info}>{item.comments}</Text>
                      </View>
                    </View>
                  )
                }
              }} />

            <Text style={styles.title2}>TASKS</Text>
            <View style={styles.list}>
              <FlatList
                data={this.state.TaskList}
                renderItem={({ item }) => {
                  if (item.task_status == "Upcoming") {
                    this.validateDate(item.task_date);
                    if (this.state.diffDate > 0) {
                      return (
                        <Card style={styles.card}>
                          <View style={styles.Task2}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                              this.redirectTaskDetailPage(item.task_title, item.task_id)
                            }}>
                              <View style={styles.Task}>
                                <Text style={styles.Type}>{item.task_title}</Text>
                                <Text style={styles.Date}> | </Text>
                                <Text style={styles.Date}>{item.task_date}</Text>
                              </View>
                            </TouchableOpacity>
                            <Icon2 name="trash-2" size={20} color={'black'} style={styles.icon} onPress={() => this.createDeleteAlert(item.task_id)} />
                            <Icon name="done" size={20} color={'green'} style={styles.icon} onPress={() => { this.createCompletionAlert() }} />
                          </View>
                        </Card>
                      )
                    }
                    if (this.state.diffDate < 0) {
                      return (
                        <Card style={styles.card}>
                          <View style={styles.Task2}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                              this.redirectTaskDetailPage(item.task_title, item.task_id)
                            }}>
                              <View style={styles.TaskOverdue}>
                                <Text style={styles.TypeOverdue}>{item.task_title}</Text>
                                <Text style={styles.DateOverdue}> | </Text>
                                <Text style={styles.DateOverdue}>{item.task_date}</Text>
                              </View>
                            </TouchableOpacity>
                            <Text style={styles.icon}>Overdue!</Text>
                            <Icon2 name="trash-2" size={20} color={'black'} style={styles.icon} onPress={() => this.createDeleteAlert(item.task_id)} />
                            <Icon name="done" size={20} color={'green'} style={styles.icon} onPress={() => { this.createCompletionAlert() }} />
                          </View>
                        </Card>
                      )
                    }
                  }
                  else if (item.task_status == "Completed") {
                    return (
                      <Card style={styles.card}>
                        <View style={styles.Task2}>
                          <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                            this.redirectTaskDetailPage(item.task_title, item.task_id)
                          }}>
                            <View style={styles.TaskCompleted}>
                              <Text style={styles.Type}>{item.task_title}</Text>
                              <Text style={styles.Date}> | </Text>
                              <Text style={styles.Date}>{item.task_date}</Text>
                            </View>
                          </TouchableOpacity>
                          <Text style={styles.icon}>Completed!</Text>
                        </View>
                      </Card>
                    )
                  }
                }}
              />

            </View>
          </SafeAreaView>
          <StatusBar style="auto" />
        </View >
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },

  WonButton: {
    backgroundColor: "green",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },

  LoseButton: {
    backgroundColor: "red",
    marginLeft: 10,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },

  buttoncontent: {
    color: "white",
    fontWeight: "bold",
  },

  details: {
    width: "30%",
    color: "grey"
  },

  info: {
    fontWeight: "bold",
    width: '50%',
  },

  border: {
    marginTop: 10,
    borderWidth: 1,
    padding: '3%',
  },

  bordertext: {
    fontWeight: "bold",
  },
  title2: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
  },

  list: {
    marginTop: 20,
  },

  TaskTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginTop: 20,
    marginStart: 15,
    fontWeight: 'bold'
  },
  Task: {
    flexDirection: 'row',
    backgroundColor: 'palegreen',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    flex: 1,
    borderRadius: 10,
  },
  TaskOverdue: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    flex: 1,
    borderRadius: 10,
  },
  Task2: {
    flexDirection: 'row',
  },
  Date: {
    marginStart: 5,
  },
  TypeOverdue: {
    color: 'white',
  },
  DateOverdue: {
    marginStart: 5,
    color: 'white'
  },
  card: {
    margin: 5,
    borderRadius: 10,
  },
  TaskCompleted: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 5,
    flex: 1,
    borderRadius: 10,
  },
  icon: {
    padding: 5,
    marginTop: 2,
    marginLeft: 5
  }
});
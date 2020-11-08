import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Card } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales_username:''
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
    return fetch(`http://192.168.43.175:80/Backend/retrieveCompletedTask.php?sales_username=${encodeURIComponent(this.state.sales_username)}`)
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={this.state.TaskList}
              renderItem={({ item }) => {
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
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: "10%",
  },

  historyView: {
    backgroundColor: "lightgrey",
    marginTop: 10,
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
  },

  historyContent: {
    flexDirection: "row",

    //fontWeight:"bold",

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '5%',
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

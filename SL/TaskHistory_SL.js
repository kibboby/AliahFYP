import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,FlatList } from 'react-native';

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
    return fetch(`http://localhost/Backend/retrieveLeadsTaskList.php?sales_username=${encodeURIComponent(this.state.sales_username)}`)
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
});

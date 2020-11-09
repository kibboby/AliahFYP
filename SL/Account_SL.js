import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Settings from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Feather';

export default class SalesPersonAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            designation: '',
            sales_name: '',
            sales_email: '',
            sales_contact: '',
            diffDate: '',
            CurrentYear: moment().format("YYYY"),
            CurrentMonth: moment().format("MM"),
            currentDay: moment().format("DD"),
        }
    }

    componentDidMount() {
        this._TaskList();
        this._AccountDetails();
        this.FocusSubscription = this.props.navigation.addListener(
            'focus', () => {
                this._AccountDetails();
            }
        )
    }

    _AccountDetails() {
        return fetch('http://192.168.43.175:80/Backend/retrieveAccountInfo.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _TaskList() {
        return fetch('http://192.168.43.175:80/Backend/retrieveOverallTaskList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource2: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
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
        return (
            <ScrollView>
                <View style={{ flex: 1, padding: "10%" }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) =>

                            <View>
                                <Settings name='setting' size={25} style={{ alignSelf: 'flex-end' }}
                                    onPress={() => this.props.navigation.navigate('Account Settings', {
                                        username: item.username,
                                        designation: item.designation,
                                        sales_name: item.sales_name,
                                        sales_email: item.sales_email,
                                        sales_contact: item.sales_contact,
                                    }
                                    )} />
                                <View style={styles.Direction}>
                                    <Icon name='user' size={45} style={styles.profileImg} />
                                    <View>
                                        <Text style={styles.Username}>{item.username}</Text>
                                        <Text style={styles.designation}>{item.designation}</Text>
                                    </View>
                                </View>

                                <View style={styles.Direction}>
                                    <View style={styles.Text}>
                                        <Text style={styles.TextMargin}>Name</Text>
                                        <Text style={styles.TextMargin}>Email</Text>
                                        <Text style={styles.TextMargin}>Contact</Text>
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.TextMargin}>{item.sales_name}</Text>
                                        <Text style={styles.TextMargin}>{item.sales_email}</Text>
                                        <Text style={styles.TextMargin}>{item.sales_contact}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />

                    <Text style={styles.TaskTitle}>UPCOMING TASKS</Text>
                    <FlatList
                        data={this.state.dataSource2}
                        renderItem={({ item }) => {
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
                                            <Icon3 name="done" size={20} color={'green'} style={styles.icon} onPress={() => { this.createCompletionAlert(item.task_id) }} />
                                        </View>
                                    </Card>
                                )
                            }
                            else if (this.state.diffDate < 0) {
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
                                            {/* <Text style={styles.icon}>Overdue!</Text> */}
                                            <Icon2 name="trash-2" size={20} color={'black'} style={styles.icon} onPress={() => this.createDeleteAlert(item.task_id)} />
                                            <Icon3 name="done" size={20} color={'green'} style={styles.icon} onPress={() => { this.createCompletionAlert(item.task_id) }} />
                                        </View>
                                    </Card>
                                )
                            }
                        }
                        }
                        keyExtractor={item => item.ID}
                    />
                </View>
            </ScrollView>
        )

    }
}


const styles = StyleSheet.create({
    Direction: {
        flexDirection: 'row',
        marginTop: 10
    },
    profileImg: {
        borderRadius: 30,
        marginStart: 10,
        height: 60,
        width: 60,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        paddingStart: 15,
    },
    Username: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 20,
    },
    designation: {
        marginLeft: 15,
        fontSize: 12,
    },
    Info: {
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 14,
    },
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
    },
    TextMargin: {
        marginBottom: 5
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
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 5,
        flex: 1,
        borderRadius: 10,
    },
    TaskOverdue: {
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 5,
        flex: 1,
        borderRadius: 10,
    },
    Task2: {
        flexDirection: 'row',
    },
    Task3: {
        flexDirection: 'row',
        backgroundColor: 'palegreen',
        borderRadius: 10,
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
        backgroundColor: 'lightgrey',
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
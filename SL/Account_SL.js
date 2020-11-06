import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { Card } from 'react-native-paper';
import Settings from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

export default class SalesPersonAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            designation: '',
            sales_name: '',
            sales_email: '',
            sales_contact: '',
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
                        renderItem={({ item }) =>

                            <Card style={styles.card}>
                                <View style={styles.Task}>
                                    <Text style={styles.Type}>{item.task_title}</Text>
                                    <Text style={styles.Date}> | </Text>
                                    <Text style={styles.Date}>{item.task_date}</Text>
                                </View>
                            </Card>
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
        marginTop: 5,
        backgroundColor: 'lightgrey',
        padding: 7,
        marginBottom: 2,
        flexDirection: 'row',
    },
    Date: {
        marginStart: 5,
    },
    card: {
        margin: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
});
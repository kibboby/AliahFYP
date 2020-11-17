import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking, Platform,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/Feather';

export default class SalesPersonAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leads_name: '',
            sales_username: '',
            task_id: ''
        }
    }

    componentDidMount() {
        this.setState({
            leads_name: this.props.route.params.leads_name,
            sales_username: this.props.route.params.sales_username,
            task_id: this.props.route.params.task_Id
        });
        this._TaskDetails();
        this.FocusSubscription = this.props.navigation.addListener(
            'focus', () => {
                this._TaskDetails();
            }
        )
    }

    dialCall = () => {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${phoneNumber}';
        }
        else {
            phoneNumber = 'telprompt:${phoneNumber}';
        }

        Linking.openURL(phoneNumber);
    }

    _TaskDetails() {
        return fetch(`https://poggersfyp.mooo.com/Backend/retrieveTaskDetails.php?task_id=${encodeURIComponent(this.props.route.params.task_Id)}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _deleteTask(task_id) {
        const url = 'https://poggersfyp.mooo.com/Backend/deleteTask.php';
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
                { text: task_id, onPress: () => this._deleteTask(task_id) }
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, padding: "10%" }}>
                    <Text style={styles.title}>CALL'S DETAIL</Text>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => {
                            if (item.task_status != "Completed") {
                                return (
                                    <View>
                                        <View>
                                            <View style={styles.Direction}>
                                                <View style={styles.Text}>
                                                    <Text style={styles.TextMargin2}>Date</Text>
                                                    <Text style={styles.TextMargin2}>Time</Text>
                                                    <Text style={styles.TextMargin2}>Notes</Text>
                                                </View>
                                                <View style={styles.Info}>
                                                    <Text style={styles.TextMargin}>{item.task_date}</Text>
                                                    <Text style={styles.TextMargin}>{item.task_time}</Text>
                                                    <Text style={styles.TextMargin}>{item.task_comments}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    
                                        <View style={styles.Direction2}>
                                            {/* <TouchableOpacity style={styles.buttons} onPress={() => this._deleteTask(this.props.route.params.task_Id)}>
                                                <Icon2 name="trash" size={20} color='#ff8c00' />
                                                <Text style={{ color: '#ff8c00', textAlign: 'center', paddingTop: 2 }}>Delete Task</Text>
                                            </TouchableOpacity> */}
                                            <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Edit Call Task', {
                                                task_id: item.task_id
                                            })}>
                                                <Icon2 name="edit" size={20} color='#ff8c00' />
                                                <Text style={{ color: '#ff8c00', textAlign: 'center', paddingTop: 2 }}>Edit Task</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.buttons} onPress={this.dialCall}>
                                                <Icon2 name="phone-call" size={20} color='#ff8c00' />
                                                <Text style={{ color: '#ff8c00', textAlign: 'center', paddingTop: 2 }} >Call</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={styles.Direction}>
                                        <View style={styles.Text}>
                                            <Text style={styles.TextMargin2}>Date</Text>
                                            <Text style={styles.TextMargin2}>Time</Text>
                                            <Text style={styles.TextMargin2}>Notes</Text>
                                        </View>
                                        <View style={styles.Info}>
                                            <Text style={styles.TextMargin}>{item.task_date}</Text>
                                            <Text style={styles.TextMargin}>{item.task_time}</Text>
                                            <Text style={styles.TextMargin}>{item.task_comments}</Text>
                                        </View>
                                    </View>

                                )
                            }
                        }}
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
    TextMargin2: {
        marginBottom: 5,
        color: 'grey'
    },
    buttons: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: '30%',
        margin: 5,
    },
    Direction2: {
        alignSelf: 'center',
        justifyContent: "space-around",
        flexDirection: 'row',
        margin: '5%',
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
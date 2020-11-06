import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListofEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmployeeList: [
                { Image: '', SalespersonName: 'John David', CompanyName: 'Facebook'}
                , { Image: '', SalespersonName: 'John David', CompanyName: 'Facebook'}
            ]
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: '10%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Overall Report')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Overall Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('List of Company')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Company Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('List of Salesperson')}
                        style={styles.cardActive}>
                        <Text style={styles.activeTitle}>Salesperson Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('List of Leads')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Leads Report</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.EmployeeList}
                        renderItem={({ item }) =>

                            <Card style={styles.card} onPress={() => this.props.navigation.navigate('Salesperson Detail')}>
                                <View style={styles.cardView}>
                                    <Icon
                                        name='user'
                                        size={35}
                                        style={styles.profileImg} />
                                    <View style={styles.texts}>
                                        <Text style={styles.Name}>{item.SalespersonName}</Text>
                                        <Text style={styles.CompanyName}>({item.CompanyName})</Text>
                                    </View>
                                </View>
                            </Card>
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        margin: 5,
        backgroundColor: 'lightgrey',
        padding: 5,
        textAlign: 'center',
        borderRadius: 5,
        width: '20%'
    },
    navTitle: {
        fontSize: 12
    },
    cardActive: {
        backgroundColor: 'black',
        width: '25%',
        textAlign: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 5
    },
    activeTitle: {
        color: 'white',
        fontSize: 12
    },
    displayContainer: {
        flexDirection: 'row',
    },
    profileImg: {
        borderRadius: 50,
        height: 40,
        width: 40,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        paddingStart: 6
    },
    card: {
        margin: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
    cardView: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10
    },
    texts: {
        marginLeft: 10
    },
    Name: {
        fontSize: 14
    },
    CompanyName: {
        fontSize: 14
    },
    Designation: {
        fontSize: 12
    }
})
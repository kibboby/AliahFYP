import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ListofCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CompanyList: [
                { CompanyName: 'Facebook' }
                , { CompanyName: 'Facebook' }
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1, padding: "10%" }}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Overall Report')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Overall Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('List of Company')}
                        style={styles.cardActive}>
                        <Text style={styles.activeTitle}>Company Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('List of Salesperson')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Salesperson Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('List of Leads')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Leads Report</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <FlatList
                        data={this.state.CompanyList}
                        renderItem={({ item }) =>

                            <Card style={styles.card} onPress={() => this.props.navigation.navigate('Company Details')}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.CompanyName}>{item.CompanyName}</Text>
                                    <View style={{ justifyContent: "flex-end" }}>
                                        <Icon name="right" size={15} />
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
    CompanyName: {
        fontSize: 16,
        flex: 1,
        marginLeft: 15,
    },
    card: {
        padding: 5,
        backgroundColor: 'lightgrey',
        margin: 5,
    }
});
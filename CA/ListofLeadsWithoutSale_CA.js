import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ListofUnassignedLeads extends Component {
    constructor(props) {
        super(props);

        this.state = {
            LeadListWithoutSalesperson: [
                { Name: 'John David', CompanyName: 'Facebook' }
                , { Name: 'John David', CompanyName: 'Facebook' }
            ]
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: '10%' }}>
                <ScrollView>
                    <FlatList
                        data={this.state.LeadListWithoutSalesperson}
                        renderItem={({ item }) =>

                            <Card style={styles.card} onPress={() => this.props.navigation.navigate('Leads Without Salesperson')}>
                                <View style={styles.cardView}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.Name}>{item.Name}  ({item.CompanyName})</Text>
                                    </View>
                                    <View style={{ justifyContent: "flex-end" }}>
                                        <Icon name="right" size={15} style={styles.icon} onPress={() => this.props.navigation.navigate('Leads Without Salesperson')} />
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
        fontSize: 14,
        marginLeft: 10,
    },
    icon: {
        paddingTop: 3,
        paddingLeft: 5,
        textAlign: 'right',
        paddingRight: 5
    }
})
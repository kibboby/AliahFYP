import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default class ListofEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmployeeList: [
                { Image: '', SalespersonName: 'John David', Designation: 'Salesperson' }
                , { Image: '', SalespersonName: 'John David', Designation: 'Salesperson' }
            ]
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: '10%' }}>
                <Icon name='user-plus' size={25} style={{alignSelf:'flex-end'}} onPress={()=> this.props.navigation.navigate('Add Salesperson')}/>
                <ScrollView>
                    <FlatList
                        data={this.state.EmployeeList}
                        renderItem={({ item }) =>

                            <Card style={styles.card} onPress={()=> this.props.navigation.navigate('Salespersons Profile')}>
                                <View style={styles.cardView}>
                                    <Icon
                                        name='user'
                                        size={35}
                                        style={styles.profileImg} />
                                    <View style={styles.texts}>
                                        <Text style={styles.Name}>{item.SalespersonName}</Text>
                                        <Text style={styles.Designation}>{item.Designation}</Text>
                                    </View>
                                    <View>
                                        <Icon2 name="right" size={15} style={{ alignSelf: 'flex-end', marginTop: 15 }} />
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
        marginLeft: 10,
        flex: 1,
        margin: 2
    },
    Name: {
        fontSize: 14
    },
    Designation: {
        fontSize: 12
    }
})

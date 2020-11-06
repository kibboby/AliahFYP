import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import Settings from 'react-native-vector-icons/AntDesign';

export default class SalesPersonAccount extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, padding: "10%" }}>
                <Settings name='setting' size={25} style={{ alignSelf: 'flex-end' }} onPress={() => this.props.navigation.navigate('Account Settings')} />
                <View style={styles.Direction}>
                    <Icon name='user' size={55} style={styles.profileImg} />
                    <View>
                        <Text style={styles.Username}>
                            John David
                    </Text>
                        <Text style={styles.designation}>
                            Salesperson
                    </Text>
                    </View>
                </View>
                <View style={styles.Direction}>
                    <View style={styles.Text}>
                        <Text style={styles.TextMargin}>Name</Text>
                        <Text style={styles.TextMargin}>Email</Text>
                        <Text style={styles.TextMargin}>Contact</Text>
                    </View>

                    <View style={styles.Info}>
                        <Text style={styles.TextMargin}>John David Beckham</Text>
                        <Text style={styles.TextMargin}>abc@gmail.com</Text>
                        <Text style={styles.TextMargin}>+6 012 345 6789</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Direction: {
        flexDirection: 'row',
        marginTop: 10
    },
    profileImg: {
        borderRadius: 50,
        marginStart: 10,
        marginTop: 2.5,
        height: 70,
        width: 70,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        paddingStart: 15,
        paddingTop: 4
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
    }
});
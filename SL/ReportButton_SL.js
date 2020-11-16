import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ButtonBasics extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.allview}>
                <Text style={styles.title}>
                    Click one of these options:
                </Text>
                <View style={styles.LayoutButtonContainer}>
                    <TouchableOpacity style={styles.ButtonWon} onPress={() => this.props.navigation.navigate('Won Leads Report')}>
                        <Text style={{ color: "#ffffff", textAlign: 'center', fontSize: 16 }}>WON LEADS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonLost} onPress={() => this.props.navigation.navigate('Lost Leads Report')}>
                        <Text style={{ color: "#ffffff", textAlign: 'center', fontSize: 16 }}>LOST LEADS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 16,
        color: 'grey',
        marginTop: 20
    },
    LayoutButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    ButtonWon: {
        borderRadius: 10,
        //width: '100%',
        margin: 10,
        height: 80,
        width: 150,
        backgroundColor: "#32cd32",
        justifyContent: 'center',
        borderColor: "#32cd32"
    },
    ButtonLost: {
        borderRadius: 10,
        //width: '100%',
        margin: 10,
        //height: '50%',
        height: 80,
        width: 150,
        backgroundColor: "#ff0000",
        justifyContent: 'center'
    },

    allview: {
        flex: 1,
        padding: "10%",
        backgroundColor: 'white'
    },
});
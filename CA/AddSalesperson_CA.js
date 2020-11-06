import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            SALES_name: '',
            SALES_designation: '',
            SALES_username: '',
            SALES_email: '',
            SALES_contact: '',
            ActivityIndicator_Loading: false,
        }
    }

    _onPressCancel() {
        alert('Cancel')
    }

    _onPressSave() {
        alert('Save')
    }


    _Insert_Data_Into_MySQL() {
        const url = 'http://localhost:80/BAckend/salespersonRegister.php';
        fetch( url,
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
                        username: this.state.SALES_username,
                        Designation: this.state.SALES_designation,
                        sales_name: this.state.SALES_name,
                        sales_email: this.state.SALES_email,
                        sales_contact: this.state.SALES_contact
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {
                alert(responseJsonFromServer);

            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.instruction}>Username</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={text => this.setState({ SALES_username: text })}
                    />

                    <Text style={styles.instruction}>Designation</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={text => this.setState({ SALES_designation: text })}
                    />

                    <Text style={styles.instruction}>Name</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={text => this.setState({ SALES_name: text })}
                    />

                    <Text style={styles.instruction}>Email</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={text => this.setState({ SALES_email: text })}
                    />

                    <Text style={styles.instruction}>Contact</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={text => this.setState({ SALES_contact: text })}
                    />


                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.Button}
                            //onPress={this._onPressLoginButton}
                            //disabled={!this.state.isFormValid}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={styles.ButtonContent}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Button}
                            //onPress={this._onPressLoginButton}
                            //disabled={!this.state.isFormValid}
                            onPress={() => this._Insert_Data_Into_MySQL()}
                        >
                            <Text style={styles.ButtonContent}>Save</Text>
                        </TouchableOpacity>
                    </View>

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
        padding: "10%",
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    instruction: {
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
    },

    input: {
        backgroundColor: "lightgrey",
        //width:'100%',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 20,
    },

    row: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },

    Button: {
        backgroundColor: "black",
        padding: 10,
        width: 130,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    ButtonContent: {
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold',
    },

});

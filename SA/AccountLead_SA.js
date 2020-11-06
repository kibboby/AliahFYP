import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LeadsAccountInSuperAdmin = () => {
    return (
        <View
            style={{
                flex: 1,
                padding:"10%"
            }}>

            <Text style={styles.Name}>Lead's Detail</Text>

            <View>
                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 23 }]}>Name</Text>
                    <Text style={styles.Info}>John David Beckham</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 23 }]}>Status</Text>
                    <Text style={styles.Info}>Won</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 28 }]}>Email</Text>
                    <Text style={styles.Info}>abc@gmail.com</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={styles.Text}>Company</Text>
                    <Text style={styles.Info}> ABC Company </Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 17 }]}>Interest</Text>
                    <Text style={styles.Info}>Website Design</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 8 }]}>Comment</Text>
                    <Text style={styles.Info}> - </Text>
                </View>
            </View>

            <Text style={styles.Name}>Assigned Salesperson</Text>
            <View>
                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 23 }]}>Name</Text>
                    <Text style={styles.Info}>John David Beckham</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 3 }]}>Company</Text>
                    <Text style={styles.Info}>ABC Company</Text>
                </View>
            </View>
        </View>
    )
};

export default LeadsAccountInSuperAdmin;

const styles = StyleSheet.create({
    Name: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginTop: 10
    },
    Direction: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'baseline'
    },
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 3
    },
    Info: {
        width: 200,
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 14,
    },
});
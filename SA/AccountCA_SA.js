import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CompanyAdminAccountSuperAdmin = () => {
    return (
        <View
            style={{
                flex: 1,
                padding:"10%"
            }}>

            <View style={styles.Icon}>
                <Icon
                    name='user'
                    size={55}
                    style={styles.profileImg} />
                <View>
                    <Text style={styles.Username}>
                        John David
                    </Text>
                    <Text style={styles.designation}>
                        Salesperson
                    </Text>
                </View>
            </View>

            <View>
                <View style={styles.Direction}>
                    <Text style={styles.Text}>Company</Text>
                    <Text style={styles.Info}>ABC Company</Text>
                </View>

                <View style={styles.Address}>
                    <Text style={[styles.Text, { marginEnd: 10 }]}>Address</Text>
                    <Text style={styles.Info}>123, Lot 1234, Lorong ABC, Jalan ABC, 93350 Kuching, Sarawak</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 25 }]}>Email</Text>
                    <Text style={styles.Info}>abc@gmail.com</Text>
                </View>
                <View style={styles.Direction}>
                    <Text style={[styles.Text, { marginEnd: 8 }]}>Contact</Text>
                    <Text style={styles.Info}>+6 012 345 6789</Text>
                </View>
            </View>
        </View>
    )
};

export default CompanyAdminAccountSuperAdmin;

const styles = StyleSheet.create({
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
    Icon:{
        flexDirection: 'row',
        marginTop: 10,
    }    ,
    Direction: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'baseline'
    },
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5
    },
    Info: {
        width: 200,
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 14,
    },
    Address: {
      flexDirection: 'row',
        marginTop: 10,
    }
});
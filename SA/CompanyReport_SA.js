import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default class ListofCompany extends Component {
    constructor(props) {
        super(props);
    }

    //to be further implemented by onPress function to go to company's detail page
    getCompanyData = (item) => {
        //var RollNo = item.RollNo;
        //var StudentName = item.StudentName;
        //var Course = item.Course;

        //alert(RollNo + "\n" + StudentName + "\n" + Course);
    }

    //to implement changing between pages
    _onPressButton() {
        //alert('You tapped the button!')
    }

    render() {
        return (
            <View style={{ flex: 1, padding: "10%" }}>
                <ScrollView>
                    <Text style={styles.CompanyName}>ABC Company</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Company Details')}
                            style={styles.nav}>
                            <Text style={styles.navTitle}>Company Detail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Company Report')}
                            style={styles.cardActive}>
                            <Text style={styles.activeTitle}>Company Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Company Leads')}
                            style={styles.nav}>
                            <Text style={styles.navTitle}>Company Leads</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.pieChartArea} />
                    <View style={{ marginLeft: 5 }}>
                        <View style={styles.Direction}>
                            <Text style={styles.TextAdmin}>Total Number of Company Admin</Text>
                            <Text style={styles.Admin}>80</Text>
                        </View>
                        <View style={styles.Direction}>
                            <Text style={styles.TextSalesperson}>Total Number of Salesperson</Text>
                            <Text style={styles.Salesperson}>20</Text>
                        </View>
                        <View style={styles.Direction}>
                            <Text style={styles.TextLeads}>Total Number of Leads</Text>
                            <Text style={styles.Leads}>20</Text>
                        </View>
                        <View style={styles.Direction}>
                            <Text style={styles.WonLeadNo}>Total Number of Won Leads</Text>
                            <Text style={styles.Won}>80</Text>
                        </View>
                        <View style={styles.Direction}>
                            <Text style={styles.LostLeadNo}>Total Number of Lost Leads</Text>
                            <Text style={styles.Lost}>20</Text>
                        </View>
                    </View>
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
        borderRadius: 5
    },
    navTitle: {
        fontSize: 12
    },
    cardActive: {
        margin: 5,
        backgroundColor: 'black',
        padding: 5,
        width: '30%',
        textAlign: 'center',
        borderRadius: 5
    },
    activeTitle: {
        color: 'white',
        fontSize: 12
    },
    pieChartArea: {
        height: '30%',
        borderColor: 1,
        borderWidth: 1,
        width: '60%',
        alignSelf: 'center'
    },
    Direction: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'baseline',
    },
    TextAdmin: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5,
    },
    TextSalesperson: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5,
        marginRight: 25
    },
    TextLeads: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5,
        marginRight: 59
    },
    WonLeadNo: {
        marginRight: 32,
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5,
    },
    LostLeadNo: {
        marginRight: 34,
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5,
    },
    Admin: {
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#ffdead',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5,
    },
    Salesperson: {
        marginTop: 2.5,
        marginStart: 40,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#f4a460',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5
    },
    Leads: {
        marginTop: 2.5,
        marginStart: 51,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#a0522d',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5
    },
    Won: {
        marginTop: 2.5,
        marginStart: 42,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#32cd32',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5
    },
    Lost: {
        marginTop: 2.5,
        marginStart: 40,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#ff0000',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5
    },
    CompanyName: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 10
    },
});
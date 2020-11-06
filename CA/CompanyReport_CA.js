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
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Company Report')}
                        style={styles.cardActive}>
                        <Text style={styles.activeTitle}>Company Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('List of Salesperson')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Salesperson Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Leads Report')}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Leads Report</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pieChartArea} />
                <View style={{ marginLeft: 20 }}>
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

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        marginTop: 10
    },
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
        width: '20%',
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
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5,
        fontSize: 12,
        color: 'grey',
        marginRight: 65,
    },
    TextAdmin: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5,
        fontSize: 12,
        color: 'grey',
    },
    TextSalesperson: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5,
        fontSize: 12,
        color: 'grey',
        marginRight: 25
    },
    TextLeads: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5,
        fontSize: 12,
        color: 'grey',
        marginRight: 59
    },
    WonLeadNo: {
        marginRight: 32,
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5,
        fontSize: 12,
        color: 'grey'
    },
    LostLeadNo: {
        marginRight: 34,
        marginTop: 2.5,
        marginLeft: 17,
        fontSize: 14,
        marginBottom: 5,
        fontSize: 12,
        color: 'grey'
    },
    User: {
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#dcdcdc',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5,
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
        marginStart: 35,
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
        marginStart: 35,
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
        marginStart: 35,
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
        marginStart: 35,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#ff0000',
        width: '15%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5
    },
});
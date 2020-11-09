import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Dialog from 'react-native-dialog';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      leads_name: '',
      sales_username: 'Mr Pimple'
    }
  }

  componentDidMount() {
    // this.setState({
    //   sales_username: this.props.route.params.p1
    // })
    this._populateDashboard();
    this.FocusSubscription = this.props.navigation.addListener(
      'focus', () => {
        this._populateDashboard();
      }
    );
  }

  _populateDashboard() {
    return fetch('http://192.168.43.175:80/Backend/PopulateSalesDashboard.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      }).catch((error) => {
        console.error(error);
      });
  }

  navigateToDetail(lN, SN) {
    this.props.navigation.navigate('Lead Detail',
      {
        leads_name: lN,
        sales_username: SN,
      })
  }

  navigateToRemarks(LD) {
    this.props.navigation.navigate('Remarks',
      {
        leads_id: LD
      })
  }

  // _addQuotationSent(leads_id){
  //   <View>
  //   <Dialog.Container  visible={true}>
  //     <Dialog.Title>Set Quotation Sent Amount</Dialog.Title>
  //     <Dialog.Description>
  //       Please enter the price of quotation sent to the lead
  //     </Dialog.Description>
  //     <Dialog.Input
  //     label="Quotation Price Sent to the lead" 
  //     textInputRef="RM1000"/>
  //     <Dialog.Button label="Cancel"
  //     onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)} />
  //     <Dialog.Button label="Confirm"
  //     onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)} />
  //   </Dialog.Container>
  // </View>
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>DASHBOARD</Text>
        <View style={styles.header}>
          <Text style={styles.fontSetting1}>Leads</Text>
          <Text style={styles.fontSetting2}>Contacted</Text>
          <Text style={styles.fontSetting2}>Quote Sent</Text>
          <Text style={styles.fontSetting2}>Won / Lost</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={styles.cardView}>
              <Text style={styles.firstCol}
                onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}>{item.lead_name}   ({item.lead_company})</Text>
              
              {item.Contacted == 'Yes' ?
                <Icon onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}
                  name="done" size={20} color={'green'} style={styles.SecColtrue} /> :
                <Icon onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}
                  name="close" size={20} color={'red'} style={styles.SecCol} />
              }

              {item.Quote_Sent == "" ?
              <Text style={styles.SecColtrue}  onPress={() => this._addQuotationSent(item.lead_id)}></Text> 
                : item.Quote_Sent == 'No' ? 
                <Icon onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}
                  name="close" size={20} color={'red'} style={styles.SecCol} /> 
                  :
                  <Text style={styles.SecColtrue}
                  onPress={() => this.navigateToDetail(item.lead_name, this.sales_username)}>{item.Quote_Sent}</Text>
              }

              {item.status == 'Won' ?
                <Text style={styles.SecColtrue}
                  onPress={() => this.navigateToRemarks(item.lead_id)}>
                  {item.status}</Text>
                :
                item.status == 'Lose' ?
                  <Text style={styles.SecCol}
                    onPress={() => this.navigateToRemarks(item.lead_id)}>
                    {item.status}</Text>
                  :
                  <Text style={styles.SecColneutral}
                    onPress={() => this.navigateToRemarks(item.lead_id)}></Text>
              }

            </View>
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 5
  },
  cardView: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    textAlign: 'center'
  },
  header: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#FAC05D',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  SecCol: {
    width: '23%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'center',
    color: '#ff0000'
  },
  firstCol: {
    fontSize: 12,
    width: '30%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15,
  },
  fontSetting1: {
    color: 'black',
    fontSize: 13,
    width: '30%',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  fontSetting2: {
    color: 'black',
    fontSize: 13,
    width: '23%',
    padding: 5,
    textAlign: 'center',
    borderColor: 'black',
    borderLeftWidth: 1,
    fontWeight: 'bold'
  },
  SecColtrue: {
    width: '23%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'center',
    color: '#008000'
  },
  SecColneutral: {
    fontSize: 12,
    width: '23%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
  },
  icon: {
    padding: 5,
    marginTop: 2,
    marginLeft: 5
  }
});
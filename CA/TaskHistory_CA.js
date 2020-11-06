import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollView}>

      <View style={styles.historyView}>
      <Text style={styles.historyContent}> Other </Text>
      <Text style={styles.historyContent}> | </Text>
      <Text style={styles.historyContent}> 05/09/2020</Text>
      <Text style={styles.historyContent}> - </Text>
      <Text style={styles.historyContent}>Adam Black </Text>
      </View>


      <View style={styles.historyView}>
      <Text style={styles.historyContent}> Other </Text>
      <Text style={styles.historyContent}> | </Text>
      <Text style={styles.historyContent}> 05/09/2020</Text>
      <Text style={styles.historyContent}> - </Text>
      <Text style={styles.historyContent}>Wee Chien </Text>
      </View>

      <View style={styles.historyView}>
      <Text style={styles.historyContent}> Other </Text>
      <Text style={styles.historyContent}> | </Text>
      <Text style={styles.historyContent}> 05/09/2020</Text>
      <Text style={styles.historyContent}> - </Text>
      <Text style={styles.historyContent}> Aliah </Text>
      </View>


      <View style={styles.historyView}>
      <Text style={styles.historyContent}> Other </Text>
      <Text style={styles.historyContent}> | </Text>
      <Text style={styles.historyContent}> 05/09/2020</Text>
      <Text style={styles.historyContent}> - </Text>
      <Text style={styles.historyContent}> Cheyenne </Text>
      </View>
      
      </ScrollView>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding:"10%",
  },

  historyView:{
  backgroundColor:"lightgrey",
  marginTop: 10,
  padding:5,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  flexDirection: 'row',
  },

  historyContent:{
  flexDirection:"row",

  //fontWeight:"bold",
 
  },
});

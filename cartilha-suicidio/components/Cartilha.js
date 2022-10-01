import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Cartilha() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.container1}>
      <Image style={styles.principal2} source={require('../assets/setembroamareloestourado.jpeg')} />
    </View>
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    width:'100%',
    padding: 24,
  },
  principal2: {
    marginTop:10,
    width: '100%',
    height: 100,
  },

});///

import * as React from 'react';
import { Text, View,ScrollView, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Cartilha from './components/Cartilha';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
       
      </Text>
        <Cartilha />
        <View style={styles.cardView}>
        <View style={styles.radiusView}>
        <Text style={styles.textView}>Historico Pessoal</Text>
        <Text style={styles.paragraphView}>Tentativa prévia é o principal fator de risco para o suicídio. Indivíduos que já tentaram o suicídio têm de cinco a seis vezes mais chances de tentar novamente. </Text>
        </View>
          <View style={styles.radiusView}>
        <Text style={styles.textView}>Ideação suicida</Text>
        <Text style={styles.paragraphView}>Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação de uma ideação suicida. Atenção a expressões como "eu desejaria não ter nascido","caso não nos encontraremos de novo","eu preferia estar morto" - são sinais de alerta. </Text>
        </View>
         <View style={styles.radiusView}>
        <Text style={styles.textView}>Fatores estressores crônicos e recentes</Text>
        <Text style={styles.paragraphView}>Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima, além daqueles que levem a prejuízo econômico e social, como falência e perda do emprego, estão associados ao surgimento de pensamentos suicidas</Text>
        </View>
      
        </View>
         <View style={styles.container2}>
      <Image style={styles.principal3} source={require('./assets/setembroamarelo.jpg')} />
    </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F6BD16',
  },


  cardView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  
  radiusView:{
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    
  },

  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: 'Lato',
    textAlign: 'center',
  },
  paragraphView: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'Lato',
    textAlign: 'center',
    marginTop:12,    
  },
    principal3: {
    marginTop:10,
    width: '100%',
    height: 350,
  },
  container2:{
    alignItems:'center',
    padding: 20,
    borderRadius: 10,
    marginBottom:30,

  }
});

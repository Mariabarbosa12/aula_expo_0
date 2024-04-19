import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './compenents/exemplo_1';

import Exemplo2 from './compenents/exemplo_2';

import Atividades_1 from './compenents/atividades_1';

import atividade_2 from './compenents/atividade_2';

export default function App() {
  return (
    <View style={styles.container}>
      <atividade_2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#745a91',
    alignItems: 'center',
    justifyContent: 'center',
    padding:18,
  },
});

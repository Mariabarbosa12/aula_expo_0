import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './compenents/exemplo_1';

import Exemplo2 from './compenents/exemplo_2';

import Exemplo_3 from './compenents/exemplo_3';

import Atividades_1 from './compenents/atividades_1';

import Atividade_2 from './compenents/atividade_2';

import Atividade_3 from './compenents/atividade_3';



export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de76c6',
    alignItems: 'center',
    justifyContent: 'center',
    padding:18,
    borderWidth:2,
    borderColor:'#7d1813',
    borderRadius:2,
  },
});

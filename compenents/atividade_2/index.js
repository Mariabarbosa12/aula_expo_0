import {View, Text} from 'react-native';

import styles from './styles';

import Mensagem from './mensagem';

export default function Atividade_2 () {
    return(
     <View style={styles.container}>
      <Text style={styles.text}>Lista de frutas </Text>
    

      <Mensagem fruta='Banana'/>
          <Mensagem fruta='Uva'/>
          <Mensagem fruta='Pera'/>
          <Mensagem fruta='Morango'/>
          <Mensagem fruta='Melancia'/>
          <Mensagem fruta='Melão'/>
          <Mensagem fruta='Goiaba'/>
          <Mensagem fruta='Ponca'/>
          </View>
     
  
    );
}


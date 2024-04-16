import {View, Text } from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2 (){
     return (
        <View style={styles.container}>
        
            <Text style={styles.titulo}>Exemplo_2</Text>

          <Mensagem nome='maju' sobrenome='silva'/>
          <Mensagem nome='gaju' idade={23}/>
          <Mensagem nome='naju'/>

        </View>
     );
}

export default Exemplo2;
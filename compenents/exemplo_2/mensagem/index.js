import {View, Text} from 'react-native';

import styles from './styles';

export default function Mensagem ({nome ='',sobrenome =''}) {
     return(
   
        <View style={styles.vimensagem}>
        <Text style={styles.mensagem}>{`ola ${nome} ${sobrenome}`}</Text>
        </View>
     );

} 
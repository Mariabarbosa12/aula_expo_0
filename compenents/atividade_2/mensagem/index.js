import {View, Text} from 'react-native';

import styles from './styles';

export default function Mensagem ({fruta =''}) {
     return(
   
        <View style={styles.vimensagem}>
        <Text style={styles.mensagem}>{`${fruta}`}</Text>
        </View>
     );

} 
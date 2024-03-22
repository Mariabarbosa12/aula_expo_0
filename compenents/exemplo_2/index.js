import {View, Text } from 'react-native';

import styles from './styles';

function Exemplo2 (){
     return (
        <View style={styles.container}>
        
            <Text style={styles.titulo}>Exemplo_2</Text>

         <View style={styles.vimensagem}>
            <Text style={styles.mensagem}> Ola Maju</Text>
            </View>

        </View>
     );
}

export default Exemplo2;
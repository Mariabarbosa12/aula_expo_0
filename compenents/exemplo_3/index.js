import {View, Text, Pressable} from 'react-native';

import styles from './styles';

export default function Exemplo_3() {
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplo_3</Text>

            <Pressable 
                 onPress={() => alert('oi')} 
                 style={ ({pressed}) => pressed ? 
               [ styles.botao, styles.botaoPress]
             :
                styles.botao}
            >

              <Text style={styles.txtBotao}>Ex. Botão</Text>

            </Pressable>
        
        </View>
    );

}

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffbaef',
        borderRadius:20,
        width:'100%',
        alignItems:'center',
    },

    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical: 20,
        color:'#ff4dd6',
    },

    botao:{
     borderWidth:2,
     padding:5,
     width:'80%',
     borderRadius:8,
     alignItems:'center',
     borderColor:'#cc3fac',
    },

    txtBotao:{
        fontSize:20,
        color:'#cc3fac',
    },

    botaoPress:{
       backgroundColor:'#734af0',
    },

    txtNumero:{
        fontSize:30,
        color:'#734af0',
        marginVertical: 10,
    },
});

export default styles;
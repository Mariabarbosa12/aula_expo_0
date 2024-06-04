
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffbaef',
        borderRadius:20,
        width:'100%',
        alignItems:'center',
    },
   container2:{
 display:'flex',
 flexDirection:'row',

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
     margin:10,
     height:50,
     width:65,


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
        marginBottom:-50,
        },

    
});

export default styles;
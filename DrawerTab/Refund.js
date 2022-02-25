import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
}from 'react-native'

export default class Refund extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.RefundText}>Did you want refunf?</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#326fa8',
    },
    RefundText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})
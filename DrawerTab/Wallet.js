import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'

export default class Wallet extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.WalletText}>
                    WALLET
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        backgroundColor:'#5832a8',
        alignItems:'center',
        justifyContent:'center'
    },
    WalletText:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    }
})
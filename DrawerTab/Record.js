import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'
export default class Record extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.RecordText}>Record Page</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },
    RecordText:{
        fontWeight:"bold",
        fontSize:24,
        color:'white'
    }
})
import React,{Component} from "react";

import { 
    View,
    StyleSheet,
    Text,
    
}from 'react-native'

export default class Settings extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.SettingsText}>
                SETTINGS</Text></View>
                
                
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    SettingsText:{
        fontWeight:'bold',
        fontSize:24,
        color:'black'
    }
})
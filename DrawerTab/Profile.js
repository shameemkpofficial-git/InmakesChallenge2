import React from 'react'
import { Component } from 'react'
import{
    View,
    StyleSheet,
    Text,
}from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.conatiner}>
                <Text style={styles.ProfileText}> PROFILE </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner:{
        height:'100%',
        width:'100%',
        flex:1,
        backgroundColor:'cyan',
        alignItems:'center',
        justifyContent:'center'
        
    },
    ProfileText:{
        fontWeight:'bold',
        fontSize:24,
        color:'#fff'
    }
})
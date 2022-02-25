import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'
export default class Help extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.HelpText}>Do you want any help</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    HelpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',

    }

})
import React,{Component} from "react";
import { 
    View,
    StyleSheet,
    Text,
    
 } from 'react-native'
 export default class AboutUs extends Component{
     render(){
         return(
             <View style={styles.container}>
                 <Text style={styles.AboutUsText}>
                     AboutUs
                 </Text>
               
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         height:'100%',
         width:'100%',
         backgroundColor:'red',
         justifyContent:'center',
         alignItems:'center'
     },
     AboutUsText:{
         fontSize:24,
         fontWeight:'bold',
         color:'white'
     }
 })
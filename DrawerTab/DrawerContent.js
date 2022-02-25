import React,{Component} from "react";
import { Divider } from 'react-native-paper';
import{
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    
} from 'react-native'

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileIcon}>
                        <Image source={require('../assets/icon.jpeg')} style={styles.profileImage}>

                        </Image>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.nameText}>Favaz</Text>
                        <TouchableHighlight style={styles.Button}
                        underlayColor='transparent'>
                            <Text style={styles.ButtonText}>Gold</Text>
                        </TouchableHighlight>
                        
                        
                    </View>
                    <TouchableHighlight style={styles.InviteButton}>
                            <Text style={styles.InviteText}>Invite</Text>
                        </TouchableHighlight>
                       
                        
                </View>
                <Text style={styles.CoinText}>Tottal Coin</Text>
                <Text style={styles.Coin2Text}>coin:20000</Text>




                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Divider style={{height:1, width:250, marginLeft:30, backgroundColor:'black', marginTop:10 }}/>
                <Text style ={styles.menu}
                onPress={()=>this.props.navigation.navigate('AboutUs')}>AboutUs</Text>
                <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Help')}>Help</Text>
                <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                 <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Record')}>Record</Text>
                 <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>
                <Text style={styles.menu}
                onPress={()=>this.props.navigate.navigation('Refund')}>Refund</Text>
                 <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>
                <Text style={styles.menu}
                onPress={()=>this.props.navigate.navigation('Settings')}>Settings</Text>
                 <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>
                <Text style={styles.menu}
                onPress={()=>this.props.navigate.navigation('Wallet')}>Wallet</Text>
                 <Divider style={{height:1, width:250, backgroundColor:'black', marginLeft:30, marginTop:10}}/>

                <Text style={styles.LogoutText}>Logout</Text>

            </View >
            
        )
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#252a30',
        height:'30%'
    },
    menu:{
        fontSize:20,
        marginTop:17,
        marginLeft:27,
        fontWeight:'bold',
        color:'black',
    },
    profileContainer:{
        height:'20%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    profileIcon:{
        height:150,
        width:150,
        backgroundColor:"#252a30",
        borderRadius:50,
        marginBottom:-50,
    },
    profileImage:{
        height:'100%',
        width:'100%'
    },
    infoView:{
        marginLeft:-30,
        marginBottom:-50
    },
    emailText:{
        fontWeight:'bold'
    },
    nameText:{
        color:'white',
        fontWeight:'bold',
        marginTop:18,
        marginLeft:80,
        fontSize:24


    },Button:{
        width:'70%',
        height:25,
        backgroundColor:'#3090C7',
        borderWidth:1,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginLeft:50
    },ButtonText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#fff',
    
    },InviteButton:{
        width:'30%',
        height:30,
        backgroundColor:'black',
        marginLeft:-250,
        marginTop:280,
        borderRadius:10
     },
     InviteText:{
         color:'#fff',
         fontSize:20,
         marginLeft:15

     },
     CoinText:{
         color:'white',
         marginTop:110,
         marginLeft:190,
         fontWeight:'bold'
     },
     Coin2Text:{
         color:'white',
         marginTop:2,
         marginLeft:190,
         fontWeight:'bold'
     },
     LogoutText:{
         color:'black',
         marginLeft:"40%",
         marginTop:15,
         fontWeight:'bold'

     }

    

    })
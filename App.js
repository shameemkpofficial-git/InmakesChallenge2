import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"


import Home from "./DrawerTab/Home"
import DrawerContent from "./DrawerTab/DrawerContent"
import Help from "./DrawerTab/Help"
import AboutUs from "./DrawerTab/AboutUs"
import Profile from "./DrawerTab/Profile"
import Record from "./DrawerTab/Record"
import Refund from "./DrawerTab/Refund"
import Settings from "./DrawerTab/Settings"
import Wallet from "./DrawerTab/Wallet"



const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='Drawer'
      component={MyDrawer}>

      </Stack.Screen>
    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
      <Drawer.Navigator
      drawerContent= {(props)=> <DrawerContent {...props}></DrawerContent>}>
          <Drawer.Screen
          name='Home'
          component={Home}>
            

          </Drawer.Screen>

          <Drawer.Screen
          name='Help'
          component={Help}>

          </Drawer.Screen>
          <Drawer.Screen
          name='AboutUs'
          component={AboutUs}>

          </Drawer.Screen>
          <Drawer.Screen
          name="Profile"
          component={Profile}>

          </Drawer.Screen>
          <Drawer.Screen
          name="Record"
          component={Record}></Drawer.Screen>

          <Drawer.Screen
          name="Refund"
          component={Refund}></Drawer.Screen>

          <Drawer.Screen
          name='Settings'
          component={Settings}></Drawer.Screen>

          <Drawer.Screen
          name='Wallet'
          component={Wallet}></Drawer.Screen>

         

          
          
      </Drawer.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack>

      </MyStack>
    </NavigationContainer>
  )
}
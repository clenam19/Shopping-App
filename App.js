{/*import { StatusBar} from 'expo-status-bar';*/}
import React from 'react';
import { StyleSheet,  View,} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./Screens/Login";
import Home from "./Screens/Home"; 
import cart from "./Screens/cart"; 

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex:1}} >
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <MainNavigator.Screen name="Home" component={Home} /> 
        <MainNavigator.Screen name="Login" component={Login} /> 
        <MainNavigator.Screen name="cart" component={cart} /> 
         </MainNavigator.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

}
)


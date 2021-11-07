import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import Login from './src/views/screens/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} /> 
       <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

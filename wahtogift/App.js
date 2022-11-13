import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AccountStack, TabsNavigator } from './src/navigation';

const App = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      {
        isLogin? (<TabsNavigator />) : (<AccountStack />)
      }
    </NavigationContainer>
  );
}

export default App;

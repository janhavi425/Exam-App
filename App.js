import * as React from 'react';
import { Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import HomeScreen from './Components/Screens/HomeScreen';
import Quiz from './Components/Screens/Quiz'
function TestScreen({ navigation }) {
  return (
    <View>
      
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Test"
        component={HomeScreen}
        options={{ title: 'Exam-Portal',headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}
      />
       <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ title: 'Exam-Portal' ,headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  content: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

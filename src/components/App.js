/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
// import { Provider as PaperProvider } from "react-native-paper";
import { createStore } from 'redux';

import reducers from '../reducers/PeopleReducer';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'People') {
            return (
              <Icon
                name={'user'}
                size={32}
                color={'tomato'}
              />
            );
          } else if (route.name === 'Companies') {
            return (
              <MaterialCommunityIcons 
              name={'airballoon-outline'} 
              size={32} 
              color={'tomato'} 
              />
            );
          } else if (route.name === 'Add contact') {
            return (
              <AntDesign
                name={'pluscircleo'}
                size={32}
                color={'tomato'}
              />
            );
          }
        },
        tabBarShowIcon: true,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      })}
    >
      <Tab.Screen name="People" component={PeopleList} />
      <Tab.Screen name="Companies" component={CompanyList} />
      <Tab.Screen name="Add contact" component={AddPerson} />
    </Tab.Navigator>
  );
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>

    </Provider >
  );
};

export default App;

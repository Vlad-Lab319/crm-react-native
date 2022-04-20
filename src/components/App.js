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

import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/EvilIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
              <Ionicons
                name="business"
                size={24}
                color="black"
              />
            );
          } else if (route.name === 'Add contact') {
            return (
              <AntDesign 
                name="pluscircle" 
                size={24} 
                color="black" 
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

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={PeopleList}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={CompanyList}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={AddPerson}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      {/* <ScrollView
      // contentInsetAdjustmentBehavior="automatic"
      // style={backgroundStyle}
      > */}

      {/* <Header /> */}
      {/* <View >
          <PeopleList />

        </View> */}
      {/* <Navigation /> */}

      {/* </ScrollView> */}
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>

    </Provider >
  );
};

export default App;

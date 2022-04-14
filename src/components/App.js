/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
// import { Node } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import PeopleList from './PeopleList';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //   return (
  //     <Provider store={store}>
  //       <SafeAreaView style={backgroundStyle}>
  //         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //         <ScrollView
  //           contentInsetAdjustmentBehavior="automatic"
  //           style={backgroundStyle}>
  //           <Header />
  //           <View
  //             style={{
  //               backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //             }}>
  //             <Section title="Step One">
  //               Edit <Text style={styles.highlight}>App.js</Text> to change this
  //               screen and then come back to see your edits.
  //               <Text style={styles.highlight}>
  //                 Will it scroll?
  //               </Text>
  //             </Section>
  //             <Section title="See Your Changes">
  //               <ReloadInstructions />
  //             </Section>
  //             <Section title="Debug">
  //               <DebugInstructions />
  //             </Section>
  //             <Section title="Learn More">
  //               Read the docs to discover what to do next:
  //             </Section>
  //             <LearnMoreLinks />
  //           </View>
  //         </ScrollView>
  //       </SafeAreaView>
  //     </Provider>
  //   );
  // };

  return (
    <Provider store={store}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View >
          <Section>
            <PeopleList />

          </Section>
          {/* <LearnMoreLinks /> */}

        </View>
      </ScrollView>

    </Provider >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

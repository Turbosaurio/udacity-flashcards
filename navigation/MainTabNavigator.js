import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import CreateFlashcard from '../screens/CreateFlashcard'
// import SettingsScreen from '../screens/SettingsScreen'

import Decks from '../screens/Decks'
import Start from '../screens/Start'


const StartStack = createStackNavigator({
  Start: Start,
})

StartStack.navigationOptions = {
  tabBarLabel: 'Start',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CreateFlashcardStack = createStackNavigator({
  Links: CreateFlashcard,
});

CreateFlashcardStack.navigationOptions = {
  tabBarLabel: 'Create a flashcard',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  StartStack,
  CreateFlashcardStack,
  // SettingsStack,
});

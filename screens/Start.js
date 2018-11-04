import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import Decks from './Decks'
import Flashcard from './Flashcard'

export default createStackNavigator (
	{
		Decks:{
			title: 'Choose a deck',
			screen: Decks
		},
		Flashcard:{
			title: 'Flashcard',
			screen: Flashcard
		}
	},{
		navigationOptions:{

		}
	}
)
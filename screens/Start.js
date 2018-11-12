import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import Decks from './Decks'
import CreateFlashcard from './CreateFlashcard'
import DeckDetails from './DeckDetails'
import Question from './Question'
import Answer from './Answer'
import Results from './Results'

export default createStackNavigator (
	{
		Decks:{
			title: 'Decks',
			screen: Decks,
		},
		Deck:{
			title: 'Deck',
			screen: DeckDetails,
		},
		CreateFlashcard:{
			title: 'Create flashcard',
			screen: CreateFlashcard,
		},
		Question:{
			title: 'front',
			screen: Question
		},
		Answer:{
			title: 'back',
			screen: Answer
		},
		Results:{
			title: 'Results',
			screen: Results,
		},
	}
)
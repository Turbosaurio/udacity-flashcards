import React, {Component} from 'react'
import {View} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import Decks from './Decks'
import CreateFlashcard from './CreateFlashcard'
import DeckDetails from './DeckDetails'
import Question from './Question'
import Answer from './Answer'
import Results from './Results'

const Navigation = createStackNavigator (
	{
		Decks:{
			screen: Decks,
		},
		Deck:{
			screen: DeckDetails,

		},
		CreateFlashcard:{
			screen: CreateFlashcard,
		},
		Question:{
			screen: Question
		},
		Answer:{
			screen: Answer
		},
		Results:{
			screen: Results,
		},
	},{
		navigationOptions:{
			initialRouteName: 'Decks',
			headerTransitionPreset: 'fade-in-place',
		}

	}
)

export default class Start extends Component{

	state = {
		currentDeck : '',
		currentFlashcard : '',
		userAnswer: '',
		flashcardIndex : 0,
		correctAnswers : 0,
	}

	render(){

		const supeprops = {...this.state}
		return(
			<Navigation screenProps={supeprops}/>
		)
	}
}
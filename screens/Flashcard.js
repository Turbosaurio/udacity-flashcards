import React, {Component} from 'react'
import {styles} from '../styles/stylingus'
import Question from './Question'
import Answer from './Answer'

import {
	ScrollView,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import {createSwitchNavigator} from 'react-navigation'

import {connect} from 'react-redux'




class Flashcard extends Component{

	state = {
		flashList: '',
		currentFlash : 0,
	}

	_handleAnswerQuestion = _ =>{
		// todo navigate to answer
		console.log('caca')
	}

	_handleNextQuestion = _ =>{
		this.setState( _ => ({currentFlash: this.state.currentFlash + 1}))
		
	}

	componentDidMount(){
		this.setState( state => ({
			...state,

		}))
	}

	render(){
		const {deck, flashcards} = this.props
		const {currentFlash} = this.state

		const flashList = Object.keys(flashcards).filter(i => flashcards[i].deck === deck)
		
		const f = flashList[currentFlash]

		const FlashcardStack = createSwitchNavigator (
			{
				Question:{
					title: 'front',
					screen: Question
				},
				Answer:{
					title: 'back',
					screen: Answer
				},
			},{
				navigationOptions:{

				}
			}
		)
		if(deck) {
			return(
				<View>
					<FlashcardStack />
				</View>
			)
		}

		return(
			<View>
				<Text>The deck is empty</Text>
			</View>
		)
	}
}

class FlashcardBack extends Component{
	render(){
		return(
			<View>
				<Text>Back</Text>
			</View>
		)
	}
}


const mapStateToProps = ({flashcards}) => {
	return {
		flashcards
	}
}

// const Flashcard = createSwitchNavigator({
// 	Front: FlashcardFront,
// 	Back: FlashcardBack,
// })

export default connect(mapStateToProps)(Flashcard)

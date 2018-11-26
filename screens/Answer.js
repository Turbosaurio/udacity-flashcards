import React, {Component} from 'react'
import {styles} from '../styles/stylingus'
import {connect} from 'react-redux'

import {goNextFlashcard} from '../redux/actions/initialActions'

import {BlueButton, RedButton} from '../common_assets/buttons'

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'




class Answer extends Component{
	state ={} 

	handleNextQuestion = _ =>{
		const {navigation, _nextFlashcard} = this.props
		_nextFlashcard()
		navigation.navigate('Question')
		if(!this.props.last){
		}
	}

	handleShowResults = _ =>{
		this.props.navigation.navigate('Results')
	}

	render(){
		const {
			lastAnswer,
			correctAnswers,
			flashcard,
			last,
		} = this.props

		return (
			<View	style={styles.centerContainer}>
				<Text>{JSON.stringify(this.props)}</Text>
				<Text style={styles.h3}>Answer</Text>
				{
					flashcard.question.answer === lastAnswer
						? <Text>Your answer was correct</Text>
						: <View>
								<Text>Your answer was wrong</Text>
								<Text>{`The correct answer was ${flashcard.question.options[flashcard.question.answer]}`}</Text>
							</View>
				}
				<View style={styles.buttonRow}>
					<BlueButton action={ this.handleNextQuestion } label='Next Question'/>
					<RedButton action={ this.handleShowResults } label='View Results'/>
				</View>
			</View>
		) 
	}
}

const mapStateToProps = ({ initialActions, flashcards, decks}) => {

	const {
		currentDeck,
		lastAnswer,
		flashcardIndex,
		correctAnswers,
	} = initialActions

	const f = decks[currentDeck].flashcards
	const last = f.length > flashcardIndex
	const flashcard = flashcards[f[flashcardIndex]]
	return {
		flashcardIndex,
		flashcard,
		lastAnswer,
		last, 
	}
}

const mapDispatchToProps = dispatch => {
	return{
		_nextFlashcard : _ => dispatch(goNextFlashcard()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Answer)
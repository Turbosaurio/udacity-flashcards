import React, {Component} from 'react'
import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'
import {
	goNextFlashcard,
	resetInitialSettings,
} from '../redux/actions/initialActions'

class Question extends Component{
	state = {}

	_handleAnswer = (answer, option) =>{

		const {total, initialActions} = this.props
		const {correctAnswers, flashcardIndex} = initialActions

		const data = {
			correctAnswers : answer ? correctAnswers + 1 : correctAnswers,
			flashcardIndex : flashcardIndex + 1,
			userAnswer : option,
		}

		this.props._nextQuestion(data)
		this.props.navigation.navigate('Answer')
	}

	render(){

		const {flashcards, initialActions} = this.props
		const flashcard = flashcards[initialActions.currentFlashcard]

		return (
			<View>
				<Text style={styles.h1}>{flashcard.name}</Text>
				<Text style={styles.h3}>{`${flashcard.question.text}?`}</Text>
				<View style={styles.buttonRow}>
					{
						Object.keys(flashcard.question.options)
							.filter( i => flashcard.question.options[i] !== '')
							.map( i => (
								<View key={i} >
									<TouchableOpacity
										style={styles.blueButton}
										onPress={ _ => {
											this._handleAnswer(i === flashcard.question.answer, i)
										}}
										>
										<Text style={styles.buttonText}>{flashcard.question.options[i]}</Text>
										<Text>{i}</Text>
									</TouchableOpacity>
								</View>
							))
					}
				</View>
			</View>
		)
		
	}

}


const mapStateToProps = ({ decks, flashcards, initialActions}) =>{
	return{
		flashcards, 
		initialActions,
		total : decks[initialActions.currentDeck].flashcards.length
	}
}


const mapDispatchToProps = dispatch =>{
	return{
		_nextQuestion : meme => {
			dispatch(goNextFlashcard(meme))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
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
	addCorrectAnswer,
	addUserAnswer,
} from '../redux/actions/initialActions'

class Question extends Component{
	state = {}

	_handleNavigation = answer =>{

		const {total, initialActions} = this.props
		const {currentFlashcard} = initialActions

		this.props.navigation.navigate('Answer')
		this.props._correctAnswer(answer)
		
		if(currentFlashcard < total){
			// this.props._nextQuestion()
			if(answer){
			}
		} else {
			this.props.navigation.navigate('Results')
		}
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
						Object.keys(flashcard.question.options).filter( i => i !== '').map( i => (
							<View key={i} >
								<TouchableOpacity
									style={styles.blueButton}
									onPress={ _ => {
										this._handleNavigation(i === flashcard.question.answer )
									}}
									>
									<Text style={styles.buttonText}>{flashcard.question.options[i]}</Text>
								</TouchableOpacity>
							</View>
						))
					}
				</View>
			</View>
		)
		
	}

}

const mapDispatchToProps = dispatch =>{
	return{
		_nextQuestion : next => {
			dispatch(goNextFlashcard(next))
		},
		
		_correctAnswer: answer => {
			dispatch(addCorrectAnswer())
			dispatch(addUserAnswer(answer))
		}
	}
}

const mapStateToProps = ({ decks, flashcards, initialActions}) =>{
	return{
		flashcards, 
		initialActions,
		total : decks[initialActions.currentDeck].flashcards.length
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
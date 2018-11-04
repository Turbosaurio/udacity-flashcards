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
} from '../redux/actions/initialActions'

class Question extends Component{
	state = {}

	_handleNavigation = answer =>{
		const {currentUser, users, decks} = this.props
		const current = this.props.initialActions.f
		const total = decks[users[currentUser].currentDeck].flashcards.length -1
		console.log(current, total, answer)
		if(current < total){
			this.props._nextQuestion(current + 1)
			this.props.navigation.navigate('Answer')
			if(answer){
				this.props._correctAnswer()
			}
		} else {
			this.props.navigation.navigate('Results')
		}
	}

	render(){
		const {currentUser, users, decks, flashcards, initialActions} = this.props
		const current = initialActions.f
		const deck = decks[users[currentUser].currentDeck]
		const flashcard = flashcards[deck.flashcards[current]]
		return (
			<View>
				<Text>{this.state.current}</Text>
				<Text style={styles.h1}>{flashcard.name}</Text>
				<Text style={styles.h3}>{`${flashcard.question.text}?`}</Text>
				<View style={styles.buttonRow}>
					{
						Object.keys(flashcard.question.options).filter( i => i !== '').map( i => (
							<View key={i} >
								<TouchableOpacity
									style={styles.blueButton}
									onPress={ _ => {
										this._handleNavigation(i ===flashcard.question.answer )
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
		
		_correctAnswer: _ => {
			dispatch(addCorrectAnswer())
		}
	}
}

const mapStateToProps = ({currentUser, users, decks, flashcards, initialActions}) =>{
	return{currentUser, users, decks, flashcards, initialActions}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
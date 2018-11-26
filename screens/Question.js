import React, {Component} from 'react'
import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'
import {
	saveLastAnswer,
} from '../redux/actions/initialActions'

class Question extends Component{
	state = {}

	_handleAnswer = (answer, option) =>{
		this.props.navigation.navigate('Answer')
		this.props._saveLastAnswer(option)
	}

	render(){

		
		const {flashcard} = this.props

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
	const {
		currentDeck,
		lastAnswer,
		flashcardIndex,
	} = initialActions

	const f = decks[currentDeck].flashcards
	const last = f.length >= flashcardIndex
	const flashcard = flashcards[f[flashcardIndex]]

	return{
		flashcard, 
		last,
	}
}


const mapDispatchToProps = dispatch =>{
	return{
		_saveLastAnswer: answer => {
			dispatch(saveLastAnswer(answer))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
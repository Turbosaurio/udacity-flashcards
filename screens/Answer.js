import React from 'react'
import {styles} from '../styles/stylingus'
import {connect} from 'react-redux'

import {goNextFlashcard} from '../redux/actions/initialActions'

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

function Answer({navigation, correct, answer, _nextFlashcard}){
	return (
		<View	style={styles.centerContainer}>
		
			<View style={styles.buttonRow}>
				<Text>{`Your answer was: ${answer} and it was ${correct}`}</Text>
					<TouchableOpacity
						style={styles.blueButton}
						onPress={ _ => {
								_nextFlashcard
								navigation.navigate('Question')
						}}
					>
						<Text style={styles.buttonText}>Next Question</Text>
					</TouchableOpacity>
			</View>
		</View>
	)
}

const mapStateToProps = ({ initialActions, flashcards, currentUser, decks, users}) => {
	const q = flashcards[initialActions.currentFlashcard].question
	const correct = q.answer === initialActions.currentAnswer
	const answer = q.options[currentAnswer]
	return {
		correct,
		answer,
	}
}

const mapDispatchToProps = dispatch => {
	return{
		_nextFlashcard : _ => dispatch(goNextFlashcard()),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Answer)
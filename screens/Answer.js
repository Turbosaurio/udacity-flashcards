import React from 'react'
import {styles} from '../styles/stylingus'
import {connect} from 'react-redux'

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

function Answer({navigation, initialActions, currentFlashcard, flashcards}){
	return (
		<View	style={styles.centerContainer}>
		
			<View style={styles.buttonRow}>
					<TouchableOpacity
						style={styles.blueButton}
						onPress={ _ =>
							navigation.navigate('Question')
						}
					>
						<Text style={styles.buttonText}>Next Question</Text>
					</TouchableOpacity>
			</View>
		</View>
	)
}

const mapStateToProps = ({initialActions, flashcards, currentUser, decks, users}) => {
	
	return {
		flashcards,
		currentFlashcard,
		initialActions,
	}
}

const mapDispatchToProps = dispatch => {
	return{
		_nextFlashcard : flashcard => console.log('todo next flashcard'),
	}
}
export default connect(mapStateToProps)(Answer)
import React from 'react'
import {styles} from '../styles/stylingus'
import {connect} from 'react-redux'

import {goNextFlashcard} from '../redux/actions/initialActions'

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

const ViewResults = props =>{
	return(
		<TouchableOpacity
			style={styles.blueButton}
			onPress={props.action}
		>
			<Text style={styles.buttonText}>View Results</Text>
		</TouchableOpacity>
	)
}

const NextQuestion = props =>{
	return(
		<TouchableOpacity
			style={styles.blueButton}
			onPress={props.action}
		>
			<Text style={styles.buttonText}>Next Question</Text>
		</TouchableOpacity>
	)
}

function Answer({navigation}){
	return (
		<View	style={styles.centerContainer}>
			<Text style={styles.h3}>Results</Text>
			<View style={styles.buttonRow}>
				<NextQuestion action={_ => navigation.navigate('Question')}/>
				<ViewResults action={_ => navigation.navigate('Results')}/>
			</View>
		</View>
	) 
}

const mapStateToProps = ({ initialActions, flashcards, decks}) => {

	return {
		
	}
}

const mapDispatchToProps = dispatch => {
	return{
		_nextFlashcard : data => dispatch(goNextFlashcard(data)),
	}
}
export default connect(mapDispatchToProps)(Answer)
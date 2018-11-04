import React, {Component} from 'react'
import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'

class Question extends Component{
	state = {
		current : 0
	}

	_handleNavigation = _ =>{
		this.props.navigation.navigate('Answer')
		this.setState( state => ({current: state.current + 1}))
	}

	render(){
		const {currentUser, users, decks, flashcards} = this.props
		const deck = decks[users[currentUser].currentDeck]
		const flashcard = flashcards[deck.flashcards[this.state.current]]
		return (
			<View>
			{/*
				<Text>{JSON.stringify(deck)}</Text>
				<Text>{JSON.stringify(flashcard)}</Text>
			*/}
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
										this._handleNavigation()
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



const mapStateToProps = ({currentUser, users, decks, flashcards}) =>{
	return{currentUser, users, decks, flashcards}
}

export default connect(mapStateToProps)(Question)
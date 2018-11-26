import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {styles} from '../styles/stylingus'

import {setCurrentFlashcard} from '../redux/actions/initialActions'

class DeckDetails extends Component{

	static navigationOptions = {
		title: 'Deck Details',
		mode: 'card',
		transparentCard: true,
	}

	render(){
		const {deck, navigation} = this.props
		return(
			<View>
				<Text style={styles.h1}>{deck.category}</Text>
				<Text style={styles.h3}>{`This deck has ${deck.flashcards.length} cards in it.`}</Text>
				<TouchableOpacity
					onPress={ _ => {
						navigation.navigate('Question')
					}}
					style={styles.blueButton}
				>
					<Text style={styles.buttonText}>Start this deck</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={ _ => navigation.navigate('CreateFlashcard')}
					style={styles.blueButton}
					>
					<Text style={styles.buttonText}>Create a new flashcard</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		_setCurrentDeck: deck => dispatch(setCurrentDeck(deck)),
	}
}

const mapStateToProps = ({initialActions, decks}) => {
	const {currentDeck} = initialActions
	const deck = decks[currentDeck]
	return { deck }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
// import { WebBrowser } from 'expo';
// import { MonoText } from '../components/StyledText';

import React, {Component, Fragment} from 'react';
import {handleInitialData} from '../redux/actions/shared'

import {styles} from '../styles/stylingus'
import {setCurrentDeck, setCurrentFlashcard} from '../redux/actions/initialActions'

import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {connect} from 'react-redux'



class Decks extends Component {
	static navigationOptions = {
		header: null,
	}

	componentDidMount(){
		this.props._getData()
  }

	render() {

		const {
			decks,
			currentUser,
			navigation,
			_setCurrentDeck,
			_setCurrentFlashcard,
		} = this.props
	
		if(!currentUser){
			return <Text>Loading...</Text>
		}
		return (
			<View>
				<View style={styles.centerContainer}>
					<Text style={styles.h1}>Choose a Deck</Text>
					<View style={styles.buttonRow}>
						{
							Object.keys(decks).map( i => {
								const deck = decks[i]
								const flashcard = decks[deck.id].flashcards[0]
								return (
									<View key={i}>
										<TouchableOpacity
											style={styles.redButton}
											onPress={ _ => {
													_setCurrentDeck(deck.id)
													_setCurrentFlashcard(flashcard)
													navigation.navigate('Deck')
												}
											}
										><Text style={styles.buttonText}>{`Go to ${deck.category}`}</Text></TouchableOpacity>
									</View>
								)
							})
						}
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({currentUser, decks}) =>{
	return {currentUser, decks}
}

const mapDispatchToProps = (dispatch) => {
	return{
		_getData : _ => dispatch(handleInitialData()),
		_setCurrentDeck : deck => dispatch(setCurrentDeck(deck)),
		_setCurrentFlashcard: flashcard => dispatch(setCurrentFlashcard(flashcard)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
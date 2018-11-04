// import { WebBrowser } from 'expo';
// import { MonoText } from '../components/StyledText';

import React, {Component, Fragment} from 'react';
import {handleInitialData} from '../redux/actions/shared'
import Flashcard from './Flashcard'

import {styles} from '../styles/stylingus'
import {setUserProp} from '../redux/actions/users'

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

	state = {
		showFlashcard: false
	}

	_handleChooseDeck(val, user){
		this.props._setUserProp('currentDeck', val, user)
		this.props.navigation.navigate('Flashcard')
	}

	componentDidMount(){
		this.props._getData()
  }
	render() {

		const {decks, flashcards, users, currentUser} = this.props
	

		if(!currentUser){
			return <Text>Loading...</Text>
		}
		return (
			<View>
				<View style={styles.centerContainer}>
					<View style={styles.buttonRow}>
						{
							Object.keys(decks).map( i => {
								const deck = decks[i]
								return (
									<View key={i}>
										<TouchableOpacity
											style={styles.redButton}
											onPress={ _ => {
													this._handleChooseDeck(deck.id, this.props.currentUser)
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

const mapStateToProps = ({currentUser, decks, flashcards, users}) =>{
	return {currentUser, decks, flashcards, users}
}

const mapDispatchToProps = (dispatch) => {
	return{
		_getData : _ => dispatch(handleInitialData()),
		_setUserProp : (key, value, user) =>{
			dispatch(setUserProp({key, value, user}))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
// import { WebBrowser } from 'expo';
// import { MonoText } from '../components/StyledText';

import React, {Component, Fragment} from 'react';
import {handleInitialData} from '../redux/actions/shared'
import Flashcard from './Flashcard'

import {styles} from '../styles/stylingus'

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
		deck: '',
		currentFlashCard: 0,
	}

	handleChooseDeck = (id) =>{
		this.setState({deck: id})
	}
	handleNextQuestion = () =>{
		this.setState( state => {
			return { currentFlashCard: state.currentFlashCard + 1}
		})
	}

	componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
	render() {
		const {deck, currentFlashCard} = this.state
		const {decksList, decks, flashcards, users} = this.props

		if(!decksList){
			return <Text>Loading...</Text>
		}
		return (
			<View>
				<View style={styles.centerContainer}>
					<View style={styles.buttonRow}>
						{
							decksList.map( i => {
								const deck = decks[i]
								return (
									<View key={i}>
										<TouchableOpacity
											style={styles.redButton}
											onPress={ _ => this.handleChooseDeck(deck.id) }
										><Text style={styles.buttonText}>{`Go to ${deck.name}`}</Text></TouchableOpacity>
									</View>
								)
							})
						}
					</View>
					<Text>{JSON.stringify(this.state)}</Text>
				</View>
				{
					deck
						? <Flashcard deck={deck}/>
						: null
				}
			</View>
		);
	}
}

const mapStateToProps = ({decks, flashcards, users}) =>{
	return {
		decksList: Object.keys(decks),
		decks,
		flashcards,
		users
	}
}

export default connect(mapStateToProps)(Decks)
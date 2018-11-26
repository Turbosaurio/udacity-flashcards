import React, {Component} from 'react';
import {handleInitialData} from '../redux/actions/shared'

import {styles} from '../styles/stylingus'
import {setCurrentDeck} from '../redux/actions/initialActions'

import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'

import {RedButton, ButtonsRow} from '../common_assets/buttons'

class Decks extends Component {
	static navigationOptions = {
		header: null,
	}

	componentDidMount(){
		this.props._getData()
  }



  handleDeckSelect(id){
  		this.props._setCurrentDeck(id)
  		this.props.navigation.navigate('DeckDetails')
  }

	render() {

		const {
			decks,
			currentUser,
			navigation,
			_setCurrentDeck,
			screenProps
		} = this.props
	
		if(!currentUser){
			return <Text>Loading...</Text>
		}
		return (
			<View>
				<View style={styles.centerContainer}>
					<Text style={styles.h1}>Choose a Deck</Text>
					<ButtonsRow>
						{
							Object.keys(decks).map( i => {
								const deck = decks[i]
								return (
									<View key={i}>
										<RedButton 
											action={_ => this.handleDeckSelect(deck.id)} 
											label={`Go to ${deck.category}`} 
										/>
									</View>
								)
							})
						}
					</ButtonsRow>
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
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
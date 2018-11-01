import React, {Component} from 'react'
import {styles} from '../styles/stylingus'
import Question from './Question'

import {
	ScrollView,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'

class Flashcard extends Component{

	state = {
		flashList: '',
		currentFlash : 0,
	}
	handleNextQuestion = _ =>{
		//todo next question in filtered list
		this.setState( _ => ({currentFlash: this.state.currentFlash + 1}))
	}
	componentDidMount(){
		this.setState( state => ({
			...state,

		}))
	}
	render(){
		const {deck, flashcards} = this.props
		const {currentFlash} = this.state

		const flashList = Object.keys(flashcards).filter(i => flashcards[i].deck === deck)
		
		const f = flashList[currentFlash]
		
		if(deck) {
			return(
				<View>
					<Question data={flashcards[f]} action={this.handleNextQuestion}/>
				</View>
			)
		}

		return(
			<View>
				<Text>The deck is empty</Text>
			</View>
		)
	}
}
const mapStateToProps = ({flashcards}) => {
	return {
		flashcards
	}
}

export default connect(mapStateToProps)(Flashcard)

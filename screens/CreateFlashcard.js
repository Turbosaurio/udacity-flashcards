import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity,
	Picker,
} from 'react-native'

import {formatFlashcard} from '../redux/APP_DATA'
import {addFlashcard} from '../redux/actions/flashcards'

class CreateFlashcard extends Component{
	state = {
		name: '',
		question: '',
		category : '',
		options: ['A', 'B'],

		optionA: '',
		optionB: '',
		optionC: '',
		optionD: '',

		btnMessage: '',
		answer: 'A',

		setCategory: false,
		defaultCategory: 'Choose',
	}

	_submitNewQuestion = () =>{
		///todo add new question to store
		const {
			setCategory, btnMessage, options, defaultCategory, ///unused
			name, question, answer,  ...rest
		} = this.state
		const data = {
			name,
			category: this.props.deckName,
			text: question,
			options: rest,
			answer,
		}
		this.props.submitFlashcard(formatFlashcard(data))
		this.props.navigation.navigate('Decks')
	}

	_displayAlert(text){
		this.setState( _ => ({btnMessage: text}))
	}

	_addNewOption = () =>{
		/// add new option with a limit of 5
		const letter = ["C", "D"]
		const max = 4
		const newLetter = letter[this.state.options.length - 2]

		if(this.state.options.length < max){
			this.setState( state => ({
				...state,
				options : state.options.concat(newLetter)
			}))
		} else {
			this._displayAlert(`Only ${max} options are available`)
		}
	}

	showPicker = _ =>{
		this.setState( _ => ({setCategory: true}))
	}

	render(){

		const {
			name, 
			
			question, 

			options, 
			btnMessage, 
			setCategory,

		} = this.state

		return(
			<View style={{padding: 25}}>
				<Text style={styles.h1}>{`Create a flashcard in category: ${this.props.deckName}`}</Text>
				<View style={styles.box}>
					<View style={styles.row}>
						<Text>Name: </Text>
						<TextInput
							 onChangeText={name => this.setState({name})}
							style={styles.textInput}
							value={name}
						/>
					</View>

					<View style={styles.row}>
						<Text>Question: </Text>
						<TextInput
							onChangeText={question => this.setState({question})}
							style={styles.textInput}
							value={question}
						/>
					</View>
					{
						options.map( i => {
							const option = `option${i}`
							return (<View key={i} style={styles.row}>
								<Text>{`Option ${i}: `}</Text>
								<TextInput
									onChangeText={text => this.setState({[option] : text})}
									style={styles.textInput}
									value={this.state[option]}
								/>
							</View>)
						})
					}
					<View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
						{
							btnMessage !== '' && <Text>{btnMessage}</Text>
						}
						<View style={{width: 50, marginLeft: 15}}>
							<Button
								style={{borderRadius: 25}}
								onPress={this._addNewOption}
								title="+"
							/>						
						</View>
					</View>
					<Text>Which of the options ins the correct Answer?</Text>
					<Picker
						selectedValue={this.state.answer}
						onValueChange={answer => this.setState({answer})}
					>
					{
						options.map( i => <Picker.Item key={i} label={i} value={i}/> )
					}	
					</Picker>
				</View>
				<View style={styles.buttonRow}>
					<TouchableOpacity
						style={styles.blueButton}
						onPress={this._submitNewQuestion}
					>
						<Text style={styles.buttonText}>Submit new flashcard</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const mapStateToProps = ({decks, initialActions}) => {
	const deck = initialActions.currentDeck
	return { 
		deckId: deck,
		deckName: decks[deck].category
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		submitFlashcard: data => {
			dispatch(addFlashcard(data))
		}
	}
}

export default  connect(mapStateToProps, mapDispatchToProps)(CreateFlashcard)
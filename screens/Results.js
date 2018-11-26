import React, {Component} from 'react'
import {connect} from 'react-redux'
import {styles} from '../styles/stylingus'
import {resetInitialSettings} from '../redux/actions/initialActions'


import {
	View, 
	Text,
	TouchableOpacity
} from 'react-native'

class Results extends Component{
	static navigationOptions = {
		title: 'Results',
	}
	render(){
		const {_resetQuestions, initialActions, navigation} = this.props
		return(
			<View>
				
				<Text style={styles.h3}>{`You got ${initialActions.correctAnswers} answers correct.`}</Text>
				<View style={styles.buttonRow}>
					<TouchableOpacity
					style={styles.redButton}
						onPress={ _ =>{
							_resetQuestions()
							navigation.navigate('Decks')
						}}
					>
						<Text style={styles.buttonText}>Go back to decks</Text>
					</TouchableOpacity>
				</View>

			</View>
		)
	}
}

const mapStateToProps = ({initialActions}) => {
	return {initialActions}
}

const mapDispatchTopProps = dispatch =>{
	return{
		_resetQuestions: _ => dispatch(resetInitialSettings())
	}
}


export default connect(mapStateToProps, mapDispatchTopProps)(Results)
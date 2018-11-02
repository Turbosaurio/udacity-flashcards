import React from 'react'
import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'

function Question(props){
	const {users, deck, flashcards, navigation} = props

	 const _handleNavigation = () =>{
	 	navigation.navigate('Answer')
	 }

	return (
		<View>
			<TouchableOpacity
				onPress={ _ => {
					_handleNavigation()

				}}
				>
				<Text>Go to answer</Text>
			</TouchableOpacity>
		</View>
	)
}



const mapStateToProps = ({users, deck, flashcards}) =>{
	return{
		users, deck, flashcards
	}
}

export default connect(mapStateToProps)(Question)
import React from 'react'
import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

function Question(){
	
	return (
		<View>
			<Text style={styles.h1}>Question</Text>
		</View>
	)
}


export default function Question({data, action, navigation}){
	const {text, options, answers} = data.question
	console.log('cacacaac', navigation)

	const _handleClick = () =>{
		action()
	}

	return (
		<View>
			<Text style={styles.h1}>{data.name}</Text>
			<Text style={styles.h3}>{text}</Text>
			<View style={styles.buttonRow}>
				{
					Object.keys(options).map( i => (
						<View key={i}>
							<TouchableOpacity style={styles.blueButton} onPress={_handleClick} value={options[i]}>
								<Text style={styles.buttonText}>{options[i]}</Text>
							</TouchableOpacity>
						</View>
					))
				}
			</View>
		</View>
	)
}
import React from 'react'
import {styles} from '../styles/stylingus'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

export default function Answer({navigation}){
	return (
		<View	style={styles.centerContainer}>
			<Text style={styles.h3}>Your answer was probably right...</Text>
			<View style={styles.buttonRow}>
					<TouchableOpacity
						style={styles.blueButton}
						onPress={ _ =>
							navigation.navigate('Question')
						}
					>
						<Text style={styles.buttonText}>Next Question</Text>
					</TouchableOpacity>
			</View>
		</View>
	)
}
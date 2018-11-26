import React from 'react'

import {
	View, TouchableOpacity, Text
} from 'react-native'

import {styles} from '../styles/stylingus'

export function RedButton ({action, label}){
	return(
		<TouchableOpacity
			onPress={action}
			style={styles.redButton}
		>
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	)
}

export function BlueButton ({action, label}){
	return(
		<TouchableOpacity
			onPress={action}
			style={styles.blueButton}
		>
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	)
}

export function ButtonsRow(props){
	return(
		<View style={styles.buttonRow}>
			{props.children}
		</View>
	)
}
import {StyleSheet} from 'react-native'

export const
	red = '#aa3f3f',
	white = '#fff',
	black = '#000',
	blue  = '#3e54a9',
	green = '#477c4f',
	grey = '#74777c',
	center = 'center',
	left = 'left',
	right = 'right',
	top = 'top',
	bottom = 'bottom'
	row = 'row',
	column = 'column',
	flexStart = 'flex-start',
	flexEnd = 'flex-end',
	spaceBetween = 'space-between',
	spaceAround = 'space-around',
	stretch = 'stretch',
	bold = 'bold'


export const styles = StyleSheet.create({
	h1:{
		fontWeight: bold,
		fontSize: 32,
		textAlign: center,
	},
	h2:{
		fontWeight: bold,
		fontSize: 26,
		textAlign: center,
	},
	h3:{
		fontWeight: bold,
		fontSize: 18,
		textAlign: center,
	},
	body:{
		fontSize: 16,
		textAlign: center,
	},
	box:{
		borderWidth: 2,
		borderColor: blue,
		marginTop: 15,
		marginBottom: 15,
		padding: 10,
	},
	row:{
		flexDirection: row,
		alignItems: center,
		justifyContent: flexStart,
	},
	textInput:{
		flex: 1,
		padding: 5,
	},
	buttonRow:{
		flexDirection: row,
		justifyContent: center, 
		flexWrap: 'wrap',
	},
	centerContainer:{
		alignItems: 'center',
		justifyContent: 'center',
		padding: 25,
	},
	blueButton:{
		backgroundColor: blue,
		padding: 10,
		margin: 5
	},
	redButton:{
		backgroundColor: red,
		padding: 10,
		margin: 5,
	},
	buttonText:{
		color: white,
		textAlign: 'center',
		fontSize: 16,
	}
})
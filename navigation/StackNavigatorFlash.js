import React from 'react'
import{
	View, Text,
	TouchableOpacity
} from 'react-native'
import {
	createStackNavigator,
	createMaterialTopTabNavigator
} from 'react-navigation'

function Front ({navigation}){
	return(
		<View>
			<Text>Front</Text>
			<TouchableOpacity onPress={ _ => navigation.navigate('Back')}>
				<Text>To back</Text>
			</TouchableOpacity>
		</View>
	)
}

function Back(){
	return(
		<View>
			<Text>Back</Text>
		</View>
	)
}

const FrontStack = createStackNavigator({
  Front: {
  	screen: Front
  },
});

const BackStack = createStackNavigator({
	Back: {
		screen: Back
	},
})

FrontStack.navigationOptions ={
	tabBarLabel: 'Front'
}
BackStack.navigationOptions = {
	tabBarLabel: 'Back'
}


export default createMaterialTopTabNavigator ({
	FrontStack, BackStack
})
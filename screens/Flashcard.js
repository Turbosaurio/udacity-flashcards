import React, {Component} from 'react'
import {View} from 'react-native'
import {createSwitchNavigator} from 'react-navigation'

import Question from './Question'
import Answer from './Answer'

export default createSwitchNavigator (
	{
		Question:{
			title: 'front',
			screen: Question
		},
		Answer:{
			title: 'back',
			screen: Answer
		},
	},{
		navigationOptions:{

		}
	}
)
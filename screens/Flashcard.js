import React, {Component} from 'react'
import {View} from 'react-native'
import {createSwitchNavigator} from 'react-navigation'

import Question from './Question'
import Answer from './Answer'
import Results from './Results'

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
		Results:{
			title: 'Results',
			screen: Results,
		},
	},{
		navigationOptions:{
			header: null,
		}
	}
)
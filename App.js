import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Splashscreen from 'react-native-splash-screen';
import Home from './layout/home/Index';
// import Test2 from './layout/home/Test2';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

type Props = {};
export default class App extends Component<Props> {
	componentDidMount() {
		setTimeout(() => {
			Splashscreen.hide();
			StatusBar.setHidden(true);
		}, 2000)
	}

	render() {
		return (
			<Home/>
		);
	}
}
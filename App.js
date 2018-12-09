import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Splashscreen from 'react-native-splash-screen';
import Home from './layout/home';

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
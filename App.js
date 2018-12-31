import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Splashscreen from 'react-native-splash-screen';
import Home from './layout/home/Index';
import store from './redux/store';
import {Provider} from 'react-redux';

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
			<Provider store={ store }>
				<Home/>
			</Provider>
		);
	}
}
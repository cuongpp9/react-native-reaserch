import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles'

type Props = {};
export default class Home extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>asdasdasdasd to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
			</View>
		);
	}
}
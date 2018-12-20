import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../Styles';

type Props = {};
export default class SlidesShow extends Component<Props> {
	render() {
		return (
			<Swiper style={styles.wrapper} height={100}
				autoplay={true}
				dot={<View style={{ backgroundColor: '#F8F8FF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
				activeDot={<View style={{ backgroundColor: 'red', width: 8, height: 8, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
				paginationStyle={{
					bottom: -2, left: -10, right: 10
				}} loop>
				<Image resizeMode='stretch' style={styles.image} source={require('../img/1.png')} />
				<Image resizeMode='stretch' style={styles.image} source={require('../img/2.png')} />
				<Image resizeMode='stretch' style={styles.image} source={require('../img/3.jpg')} />
				<Image resizeMode='stretch' style={styles.image} source={require('../img/4.jpg')} />
				<Image resizeMode='stretch' style={styles.image} source={require('../img/5.jpg')} />
				<Image resizeMode='stretch' style={styles.image} source={require('../img/6.png')} />
				<Image resizeMode='stretch' style={styles.image} source={require('../img/7.png')} />
			</Swiper>
		);
	}
}
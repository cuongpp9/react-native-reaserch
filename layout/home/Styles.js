import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
	home: {
			flex: 1,
	},
	container: {
			flex: 1,
			zIndex: 0,
	},
	header: {
			position: 'absolute',
			flex: 20,
			zIndex: 2,
			backgroundColor: 'rgba(255, 255, 255, 1)',
	},
	wrapper: {
	},
	image: {
			width,
			height: 10,
			flex: 1
	},
	body: {
			backgroundColor: 'blue',
			flex: 5,
	},
	footer: {
			backgroundColor: 'red',
			justifyContent: 'flex-end',
			flex: 1,
	},

	searchSection: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'rgba(255, 255, 255, 0.9)',
			borderRadius: 10,
			paddingRight: 10,
	},
	searchIcon: {
			width: 25,
			height: 25,
			marginLeft: 10,
	},
	input: {
			flex: 1,
			paddingTop: 10,
			backgroundColor: 'rgba(255, 255, 255,0)',
			color: '#424242',
			fontSize: 10
	},
});
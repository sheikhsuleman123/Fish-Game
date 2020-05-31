import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Platform,
	Dimensions,
	ImageBackground,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native';

const App = (props) => {

	let TouchAble = null;
	let [ score, setScore ] = useState(0);
	let [ position, setPosition ] = useState({
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	});

	const movements = setTimeout(() => {
		setPosition((prevState) => ({
			top: Math.floor(
				Math.random() * (Dimensions.get('screen').height - 100)
			),
			left: Math.floor(
				Math.random() * (Dimensions.get('screen').width - 100)
			),
			right: Math.floor(
				Math.random() * (Dimensions.get('screen').width - 100)
			),
			bottom: Math.floor(
				Math.random() * (Dimensions.get('screen').height - 100)
			)
		}));
	}, 1000);

	if( Platform.OS == 'ios'){
		 TouchAble =	<TouchableOpacity
				onPress={() => {
					clearTimeout(movements);
					setScore(score + 1);
				}}
			>
				<Image
					style={{
						height: 50,
						width: 80,
						position: 'absolute',
						top: position.top,
						right: position.right,
						left: position.left,
						bottom: position.bottom
					}}
					source={require('./assets/images/Fish.png')}
				/>
			</TouchableOpacity>
	}else{
		 TouchAble =	<TouchableNativeFeedback
				onPress={() => {
					clearTimeout(movements);
					setScore(score + 1);
				}}
			>
				<Image
					style={{
						height: 50,
						width: 80,
						position: 'absolute',
						top: position.top,
						right: position.right,
						left: position.left,
						bottom: position.bottom
					}}
					source={require('./assets/images/Fish.png')}
				/>
			</TouchableNativeFeedback>
	}
	return (
		<ImageBackground
			source={require('./assets/images/pond.png')}
			style={{ height: '100%', width: '100%' }}>

			<Text style={styles.text}>Your Score is {score} </Text>

			{TouchAble}
			
		</ImageBackground>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 25,
		color: 'black',
		textAlign:'center',
		marginTop: 40
	}
});

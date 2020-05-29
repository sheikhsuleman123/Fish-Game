import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	Dimensions
} from 'react-native';

const App = (props) => {
	let [ position, setPosition ] = useState({
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	});

	return (
		<ImageBackground
			source={require('./assets/images/pond.png')}
			style={{ height: '100%', width: '100%' }}
		>
			<View style={styles.container}>
				<Image
					style={{
						height: 50,
						width: 80,
						position: 'absolute',
						top: position.top,
						right: position.right,
						left: position.left,
						bottom: position.bottom,
					}}
					source={require('./assets/images/Fish.png')}
				/>
			</View>
		</ImageBackground>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

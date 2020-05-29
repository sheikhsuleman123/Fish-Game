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
	return (
		<ImageBackground
			source={require('./assets/images/pond.png')}
			style={{ height: '100%', width: '100%' }}
		>
			<View style={styles.container}>
				<Image
					style={{ height: 50, width: 80,  }}
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

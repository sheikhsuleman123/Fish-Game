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
      style={{ height:'100%', width:'100%' }} >
    
      <View style={styles.container}>
				<Image style={{ height:'100px', width:'100px'}} source={require('./assets/images/fish.jpg')}  /> 
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

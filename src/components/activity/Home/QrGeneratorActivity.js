import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { AppRegistry, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function Generator({navigation}) {
	const [text, setText] = useState('https://github.com/Mineru98');
	let logoFromFile = require('../../../assets/icon.png');

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} onChangeText={data => setText(data)} value={text} />
			<TouchableOpacity
				style={{
					alignItems: 'center',
					justifyContent: 'center'
				}}
				onPress={() => {
					navigation.goBack();
					navigation.push('FriendsActivity', { data: text });
				}}
			>
				<QRCode value={text} logoSize={30} logoBackgroundColor="transparent" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},

	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		margin: 10,
		borderRadius: 5,
		padding: 5
	}
});
import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { AppRegistry, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function Generator({ navigation }) {
	const [id, setId] = useState('1');
	const [name, setName] = useState('임근석');
	const [text, setText] = useState("UserId:1,Name:'임근석'");
	let logoFromFile = require('../../../assets/icon.png');

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={data => {
					setId(data);
					setText('UserId:' + id + ",Name:'" + name + "'");
				}}
				value={id}
			/>
			<TextInput
				style={styles.input}
				onChangeText={data => {
					setName(data);
					setText('UserId:' + id + ",Name:'" + name + "'");
				}}
				value={name}
			/>
			<TouchableOpacity
				style={{
					alignItems: 'center',
					justifyContent: 'center'
				}}
				onPress={() => {
					const obj = { UserId: 0, Name: '' };
					const arr = text.split(',');
					obj.UserId = arr[0].split(':')[1];
					obj.Name = arr[1].split(':')[1];
					navigation.goBack();
					navigation.push('FriendsActivity', obj);
				}}
			>
				<QRCode
					size={200}
					value={text}
					logoSize={30}
					color="#002a1b"
					logoBackgroundColor="transparent"
				/>
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
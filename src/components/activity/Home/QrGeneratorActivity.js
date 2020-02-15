import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { AppRegistry, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function Generator({ navigation }) {
	const [id, setId] = useState(1);
	const [name, setName] = useState('name');
	const [text, setText] = useState("id:1,name:'name'");
	let logoFromFile = require('../../../assets/icon.png');

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={data => {
					setId(data);
					setText('id:' + id + ",name:'" + name + "'");
				}}
				value={id}
			/>
			<TextInput
				style={styles.input}
				onChangeText={data => {
					setName(data);
					setText('id:' + id + ",name:'" + name + "'");
				}}
				value={name}
			/>
			<TouchableOpacity
				style={{
					alignItems: 'center',
					justifyContent: 'center'
				}}
				onPress={() => {
					const obj = { id: 0, name: '' };
					const arr = text.split(',');
					obj.id = arr[0].split(':')[1];
					obj.name = arr[1].split(':')[1];
					// arr.forEach(element => {
					// 	const i = element.split(':');
					// 	console.log(i[1])
					// });
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
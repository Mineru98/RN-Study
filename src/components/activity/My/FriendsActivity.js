import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default function FriendsActivity({ route, navigation }) {
	let id = route.params.UserId || 0;
	let name = route.params.Name || '';
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>
				{id}: {name}
			</Text>
		</View>
	);
}
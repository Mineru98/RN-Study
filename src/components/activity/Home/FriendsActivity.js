import React from 'react';
import { View, Text } from 'react-native';

export default function FriendsActivity({ route, navigation }) {
	const id = route.params.id || 0;
	const name = route.params.name || '';
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>{id}: {name}</Text>
		</View>
	);
}
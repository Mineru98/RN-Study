import React from 'react';
import { View, Text } from 'react-native';

export default function FriendsActivity({ route, navigation }) {
	const { data } = route.params || 'data';
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>{data}</Text>
		</View>
	);
}
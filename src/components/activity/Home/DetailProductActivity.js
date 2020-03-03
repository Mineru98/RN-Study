import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default function DetailProductActivity({ route, navigation }) {
	let data = route.params.data || 0;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>
				{data}
			</Text>
		</View>
	);
}
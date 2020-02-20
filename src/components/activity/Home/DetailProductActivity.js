import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default function DetailProductActivity({ route, navigation }) {
	const [ data ] = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>
				{data}
			</Text>
		</View>
	);
}
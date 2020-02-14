import * as React from 'react';
import { Text, View, Button } from 'react-native';
import TestActivity from './TestActivity';


function Messages() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>홈</Text>
		</View>
	);
}

export default function HomeActivity({ navigation }) {
	return (
		<TestActivity/>
	);
}
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsActivity } from '../activity/Settings';

const Stack = createStackNavigator();

export default function SettingsScreen({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="SettingsActivity" component={SettingsActivity} options={{ title: '더보기' }} />
		</Stack.Navigator>
	);
}
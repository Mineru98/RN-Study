import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ShopActivity } from '../activity/Shop';

const Stack = createStackNavigator();

export default function ShopScreen({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ShopActivity" component={ShopActivity} options={{ title: '장보기' }} />
		</Stack.Navigator>
	);
}
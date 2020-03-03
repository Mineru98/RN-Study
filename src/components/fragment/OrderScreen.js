import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderActivity } from '../activity/Order';

const Stack = createStackNavigator();

export default function OrderScreen({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#ffffff'
				},
				headerTitleStyle: { color: '#000000', fontWeight: 'bold' },
				headerTintColor: '#000000'
			}}
		>
			<Stack.Screen name="OrderActivity" component={OrderActivity} options={{ title: '주문내역' }} />
		</Stack.Navigator>
	);
}
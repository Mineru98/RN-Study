import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderActivity } from '../activity/Order';

const Stack = createStackNavigator();

export default function OrderScreen({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="OrderActivity" component={OrderActivity} options={{ title: '주문내역' }} />
		</Stack.Navigator>
	);
}
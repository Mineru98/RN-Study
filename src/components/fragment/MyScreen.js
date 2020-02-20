import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyActivity, PointActivity } from '../activity/My';

const Stack = createStackNavigator();

export default function MyScreen({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="MyActivity" component={MyActivity} options={{ title: 'My' }} />
			<Stack.Screen
				name="PointActivity"
				component={PointActivity}
				options={{
					title: '포인트'
				}}
			/>
		</Stack.Navigator>
	);
}
import * as React from 'react';
import { Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeActivity } from '../activity/Home';
import { Blue, palette } from '../../utils/palette';

const Stack = createStackNavigator();

// 이런식으로 적용 가능
function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={require('/workspace/RN-Study/assets/icon.png')}
		/>
	);
}

export default function HomeScreen({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#ffffff'
				},
				headerTitleStyle: { color: '#000000', fontWeight: 'bold' },
				headerTintColor: '#00ff00'
			}}
		>
			<Stack.Screen
				name="HomeActivity"
				component={HomeActivity}
				options={{
					title: '홈',
					headerRight: () => (
						<Button
							onPress={() => alert('This is a button!')}
							title="Info"
							color="#fff"
						/>
					)
				}}
			/>
		</Stack.Navigator>
	);
}
//<Stack.Screen name="HomeActivity" component={HomeActivity} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
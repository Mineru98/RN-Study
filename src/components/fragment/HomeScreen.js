import * as React from 'react';
import { Image, Button, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { HomeActivity, QrCodeScanner, FriendsActivity, QrGeneratorActivity, DetailProductActivity } from '../activity/Home';// web 디버깅 시 주석 처리
import { HomeActivity, FriendsActivity, QrGeneratorActivity, DetailProductActivity } from '../activity/Home';// web 디버깅 시 사용


const Stack = createStackNavigator();

// 이런식으로 적용 가능
function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={require('/workspace/Daily-frontend/src/assets/icon.png')}
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
				headerTintColor: '#000000'
			}}
		>
			<Stack.Screen
				name="HomeActivity"
				component={HomeActivity}
				navigation={navigation}
				options={{
					title: '홈',
				}}
			/>
			
			<Stack.Screen
				name="DetailProductActivity"
				component={DetailProductActivity}
				navigation={navigation}
				options={{
					title: '상품명',
				}}
			/>
		</Stack.Navigator>
	);
}
//<Stack.Screen name="HomeActivity" component={HomeActivity} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
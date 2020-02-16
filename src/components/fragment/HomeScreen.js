import * as React from 'react';
import { Image, Button, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeActivity, QrCodeScanner, FriendsActivity, QrGeneratorActivity } from '../activity/Home';// web 디버깅 시 주석 처리
// import { HomeActivity, FriendsActivity, QrGeneratorActivity } from '../activity/Home';// web 디버깅 시 사용

import { CustomButton } from '../custom';

const Stack = createStackNavigator();

// 이런식으로 적용 가능
function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={require('/workspace/RN-Study/src/assets/icon.png')}
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
				options={{
					title: '홈',
					headerRight: () => (
						<View style={{flexDirection:"row"}}>
							<CustomButton
								type={2}
								imgName={"ios-people"}
								onPress={() => navigation.navigate('QrGeneratorActivity')}
							/>
							<CustomButton
								type={1}
								imgName={"qrcode-scan"}
								onPress={() => navigation.navigate('ScannerActivity')}
							/>
						</View>
					)
				}}
			/>
			<Stack.Screen
				name="ScannerActivity"
				component={QrCodeScanner}
				options={{
					title: '스캐너',
				}}
			/>
			<Stack.Screen
				name="FriendsActivity"
				component={FriendsActivity}
				options={{
					title: '친구',
				}}
			/>
			<Stack.Screen
				name="QrGeneratorActivity"
				component={QrGeneratorActivity}
				options={{
					title: '친구',
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
  button: {
	  color: 'red'
  }
});
//<Stack.Screen name="HomeActivity" component={HomeActivity} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
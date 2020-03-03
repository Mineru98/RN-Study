import * as React from 'react';
import { Image, Button, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyActivity, PointActivity, FriendsActivity, ChangeActivity, SettingActivity, QrGeneratorActivity } from '../activity/My';
// import { MyActivity, PointActivity, FriendsActivity, ChangeActivity, SettingActivity, QrGeneratorActivity, QrCodeScanner } from '../activity/My';// web 디버깅 시 주석 처리

import { CustomButton } from '../custom';

const Stack = createStackNavigator();

export default function MyScreen({ navigation }) {
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
				name="MyActivity"
				component={MyActivity}
				navigation={navigation}
				options={{
					title: 'My',
					headerRight: () => (
						<View style={{ flexDirection: 'row' }}>
							<CustomButton
								type={2}
								imgName={'ios-people'}
								onPress={() => navigation.navigate('QrGeneratorActivity')}
							/>
							<CustomButton
								type={1}
								imgName={'qrcode-scan'}
								onPress={() => navigation.navigate('ScannerActivity', { id: 1, name: 'Mineru' })}
							/>
						</View>
					)
				}}
			/>
			<Stack.Screen
				name="PointActivity"
				component={PointActivity}
				options={{
					title: '포인트'
				}}
			/>
			<Stack.Screen
				name="ScannerActivity"
				component={FriendsActivity}
				options={{
					title: '스캐너'
				}}
			/>
			<Stack.Screen
				name="FriendsActivity"
				component={FriendsActivity}
				options={{
					title: '친구'
				}}
			/>
			<Stack.Screen
				name="ChangeActivity"
				component={ChangeActivity}
				options={{
					title: '사용자 전환'
				}}
			/>
			<Stack.Screen
				name="SettingActivity"
				component={SettingActivity}
				options={{
					title: '설정'
				}}
			/>
			<Stack.Screen
				name="QrGeneratorActivity"
				component={QrGeneratorActivity}
				options={{
					title: '친구'
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
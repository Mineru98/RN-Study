import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home!</Text>
		</View>
	);
}

function Test1Screen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Test1!</Text>
		</View>
	);
}

function Test2Screen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Test2!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}

const Red = Symbol();
const Orange = Symbol();
const Yellow = Symbol();
const Green = Symbol();
const TealBlue = Symbol();
const Blue = Symbol();
const Purple = Symbol();
const Pink = Symbol();

function palette(COLOR) {
	switch (COLOR) {
		case Red:
			return '#ff3b30';
		case Orange:
			return '#ff9500';
		case Yellow:
			return '#ffcc00';
		case Green:
			return '#4cd964';
		case TealBlue:
			return '#5ac8fa';
		case Blue:
			return '#007aff';
		case Purple:
			return '#5856d6';
		case Pink:
			return '#ff2d55';
	}
}

const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused
								? 'ios-information-circle'
								: 'ios-information-circle-outline';
						} else if (route.name === 'Test1') {
							iconName = focused ? 'ios-list-box' : 'ios-list';
						} else if (route.name === 'Test2') {
							iconName = focused ? 'ios-list-box' : 'ios-list';
						} else if (route.name === 'Settings') {
							iconName = focused ? 'ios-list-box' : 'ios-list';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: palette(Blue),
					inactiveTintColor: 'gray'
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Test1" component={Test1Screen} />
				<Tab.Screen name="Test2" component={Test2Screen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
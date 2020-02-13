import 'react-native-gesture-handler';
// import TestInputText from './components/TestInputText';
// import TestButton from './components/TestButton';
// import TestScroll from './components/TestScroll';
// import TestListView from './components/TestListView';
import TestSectionListView from './components/TestSectionListView';

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Jane's profile"
				onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
			/>
			<Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
		</View>
	);
}

function ProfileScreen({ route, navigation }) {
	console.log(route.params);
	const { name } = route.params || 'name';
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text> {name} Profile Screen</Text>
			<Button
				title="Go to Profile... again"
				onPress={() => navigation.push('Profile', { name: 'Jane' })}
			/>
			<Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}

function SettingsScreen({navigation}) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text> Settings Screen</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="Settings" component={SettingsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
import * as React from 'react';
import 'react-native-gesture-handler';
// import { Provider } from 'react-redux';
// import { Text, View, Platform } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Blue, palette } from './utils/palette';
import { HomeScreen, OrderScreen, MyScreen } from './components/fragment';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;
							if (route.name === '홈') {
								iconName = focused ? 'ios-home' : 'ios-home';
								return <Ionicons name={iconName} size={size} color={color} />;
							} else if (route.name === 'My') {
								iconName = focused ? 'shop' : 'shop';
								return <Entypo name={iconName} size={size} color={color} />;
							} else if (route.name === '주문내역') {
								iconName = focused ? 'ios-cart' : 'ios-cart';
								return <Ionicons name={iconName} size={size} color={color} />;
							}
						}
					})}
					tabBarOptions={{
						activeTintColor: palette(Blue),
						inactiveTintColor: 'gray',
						showLabel: false
					}}
				>
					<Tab.Screen name="홈" component={HomeScreen} />
					<Tab.Screen name="주문내역" component={OrderScreen} />
					<Tab.Screen name="My" component={MyScreen} />
				</Tab.Navigator>
			</NavigationContainer>
	);
}
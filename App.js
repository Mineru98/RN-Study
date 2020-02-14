import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { HomeScreen, ShopScreen, OrderScreen, SettingsScreen } from './components/fragment';
import { Blue, palette } from './utils/palette';

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
							} else if (route.name === '장보기') {
								iconName = focused ? 'shop' : 'shop';
								return <Entypo name={iconName} size={size} color={color} />;
							} else if (route.name === '주문내역') {
								iconName = focused ? 'ios-cart' : 'ios-cart';
								return <Ionicons name={iconName} size={size} color={color} />;
							} else if (route.name === '더보기') {
								iconName = focused ? 'ios-settings' : 'ios-settings';
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
					<Tab.Screen name="장보기" component={ShopScreen} />
					<Tab.Screen name="주문내역" component={OrderScreen} />
					<Tab.Screen name="더보기" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
	);
}
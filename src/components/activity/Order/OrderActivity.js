import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default function OrderActivity({ navigation }) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<View style={{ flex: 1 }}>
			<View style={{ margin: 10, marginTop: 5, marginBottom: 5 }}>
				<SegmentedControlTab
					values={['찜내역', '구매내역']}
					selectedIndex={selectedIndex}
					onTabPress={index => {
						setSelectedIndex(index);
					}}
				/>
			</View>
			{selectedIndex == 0 ? (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>찜내역</Text>
				</View>
			) : (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>구매내역</Text>
				</View>
			)}
		</View>
	);
}
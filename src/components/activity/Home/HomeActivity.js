import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	ActivityIndicator,
	Image,
	Text,
	TouchableHighlight,
	Dimensions
} from 'react-native';
// import { withNavigation } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { Blue, palette } from '../../../utils/palette';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class HomeActivity extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: {},
			dataSource2: {},
			selectedIndex: 0
		};
	}

	componentDidMount() {
		let items1 = Array.apply(null, Array(4)).map((v, i) => {
			if (i != 10) {
				return (
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							height: screenWidth * 0.5
						}}
					>
						<TouchableHighlight
							style={styles.PointLayout}
							underlayColor="#024a30"
							onPress={() => this.props.navigation.navigate('DetailProductActivity', {data:"상품"})}
						>
							<Text style={{ color: '#fff' }}> 상품 {i} </Text>
						</TouchableHighlight>
					</View>
				);
			}
		});
		let items2 = Array.apply(null, Array(4)).map((v, i) => {
			if (i != 10) {
				return (
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							height: screenWidth * 0.5
						}}
					>
						<TouchableHighlight
							style={styles.PointLayout}
							underlayColor="#024a30"
							onPress={() => this.props.navigation.navigate('DetailProductActivity', {data:"업체"})}
						>
							<Text style={{ color: '#fff' }}> 업체 {i} </Text>
						</TouchableHighlight>
					</View>
				);
			}
		});
		this.setState({
			dataSource1: items1,
			dataSource2: items2
		});
	}

	handleIndexChange = index => {
		this.setState({
			selectedIndex: index
		});
	};

	render() {
		const { selectedIndex } = this.state;
		return (
			<View>
				<View style={{ margin: 10, marginTop: 5, marginBottom: 5 }}>
					<SegmentedControlTab
						values={['상품', '업체']}
						selectedIndex={selectedIndex}
						onTabPress={this.handleIndexChange}
					/>
				</View>

				{selectedIndex == 0 ? (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
							margin: 8
						}}
					>
						<FlatList
							style={{ backgroundColor: '#fff' }}
							data={this.state.dataSource1}
							renderItem={({ item }) => (
								<View style={{ flexDirection: 'column' }}>{item}</View>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>
				) : (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
							margin: 8
						}}
					>
						<FlatList
							style={{ backgroundColor: '#fff' }}
							data={this.state.dataSource2}
							renderItem={({ item }) => (
								<View style={{ flexDirection: 'column' }}>{item}</View>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ProfileLayout: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#002a1b',
		justifyContent: 'center',
		alignItems: 'center',
		height: screenHeight * 0.35,
		flex: 1
	},
	PointLayout: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#002a1b',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		height: screenWidth * 0.3
	},
	MyShopLayout: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#002a1b',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.5,
		height: screenWidth * 0.5
	}
});
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

import { Blue, palette } from '../../../utils/palette';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class HomeActivity extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: {}
		};
	}

	componentDidMount() {
		let items = Array.apply(null, Array(5)).map((v, i) => {
			if (i != 10) {
				return (
					<View>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
							}}
						>
							<TouchableHighlight
								style={styles.ProductLayout}
								underlayColor="#E5E5E5"
								onPress={() =>
									this.props.navigation.navigate('DetailProductActivity', { data: '상품' })}
							>
								<Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' }}> 상품 {i} </Text>
							</TouchableHighlight>
						</View>
					</View>
				);
			}
		});

		this.setState({
			dataSource: items
		});
	}

	handleIndexChange = index => {
		this.setState({
			selectedIndex: index
		});
	};

	render() {
		return (
			<View>
				<FlatList
					data={this.state.dataSource}
					renderItem={({ item }) => <View style={{ flexDirection: 'column', backgroundColor: '#F2F2F2' }}>{item}</View>}
					keyExtractor={(item, index) => index.toString()}
				/>
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
	ProductLayout: {
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'right',
		padding: 20,
		margin: 5,
		flex: 1,
		height: screenWidth * 0.3
	}
});
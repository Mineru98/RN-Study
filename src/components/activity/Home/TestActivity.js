import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	ActivityIndicator,
	Image,
	TouchableOpacity
} from 'react-native';

export default class TestActivity extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: {}
		};
	}
	componentDidMount() {
		var that = this;
		let items = Array.apply(null, Array(20)).map((v, i) => {
			return { id: i, src: 'http://placehold.it/200x200?text=4'};
		});
		that.setState({
			dataSource: items
		});
	}
	render() {
		return (
			<View style={styles.MainContainer}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({ item }) => (
						<View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
							<Image style={styles.imageThumbnail} source={{ uri: item.src }} />
						</View>
					)}
					numColumns={2}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		justifyContent: 'center',
		flex: 1,
		paddingTop: 0
	},

	imageThumbnail: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 200
	}
});
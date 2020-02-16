import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	ActivityIndicator,
	Image,
	Text,
	TouchableHighlight,
	Dimensions,
	Alert
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import { Blue, palette } from '../../../utils/palette';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class HomeActivity extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: {},
			_showAlert: false,
			_showAlert2: false
		};
	}

	componentDidMount() {
		let items = Array.apply(null, Array(4)).map((v, i) => {
			if (i == 0) {
				return (
					<View
						style={{
							flex: 1,
							height: screenHeight * 0.35
						}}
					>
						<TouchableHighlight
							style={styles.ProfileLayout}
							underlayColor="#024a30"
							onPress={() => {
								this.setState({
									_showAlert: true,
									_showAlert2: false
								});
							}}
						>
							<Text style={{ color: '#fff' }}> Profile </Text>
						</TouchableHighlight>
					</View>
				);
			} else if (i == 1) {
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
							onPress={() => {
								this.setState({
									_showAlert: false,
									_showAlert2: true
								});
							}}
						>
							<Text style={{ color: '#fff' }}> My Point </Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.MyShopLayout}
							underlayColor="#024a30"
							onPress={() => {
							}}
						>
							<Text style={{ color: '#fff' }}> {i} Test </Text>
						</TouchableHighlight>
					</View>
				);
			} else {
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
							onPress={() => {
							}}
						>
							<Text style={{ color: '#fff' }}> {i} Test </Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.MyShopLayout}
							underlayColor="#024a30"
							onPress={() => {
							}}
						>
							<Text style={{ color: '#fff' }}> {i} Test </Text>
						</TouchableHighlight>
					</View>
				);
			}
		});
		this.setState({
			dataSource: items
		});
	}
	render() {
		const { _showAlert, _showAlert2 } = this.state;
		
		return (
			<View>
				<FlatList
					style={{ backgroundColor: '#fff' }}
					data={this.state.dataSource}
					renderItem={({ item }) => (
						<View style={{ flexDirection: 'column' }}>{item}</View>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
				<AwesomeAlert
					show={_showAlert}
					showProgress={false}
					title="My Profile"
					message="Description"
					closeOnTouchOutside={true}
					closeOnHardwareBackPress={false}
					showCancelButton={true}
					showConfirmButton={true}
					cancelText="아니요"
					confirmText="좋아요"
					confirmButtonColor={palette(Blue)}
					onCancelPressed={() => {
						this.setState({
							_showAlert: false
						});
					}}
					onConfirmPressed={() => {
						this.setState({
							_showAlert: false
						});
					}}
				/>
				<AwesomeAlert
					show={_showAlert2}
					showProgress={false}
					title="My Point"
					message="Description"
					closeOnTouchOutside={true}
					closeOnHardwareBackPress={false}
					showCancelButton={true}
					showConfirmButton={true}
					cancelText="아니요"
					confirmText="좋아요"
					confirmButtonColor={palette(Blue)}
					onCancelPressed={() => {
						this.setState({
							_showAlert2: false
						});
					}}
					onConfirmPressed={() => {
						this.setState({
							_showAlert2: false
						});
					}}
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
	PointLayout: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#002a1b',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.5,
		height: screenWidth * 0.5
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
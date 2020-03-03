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

export default class MyActivity extends Component {
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
							underlayColor="#E5E5E5"
							onPress={() => {
								this.setState({
									_showAlert: true,
									_showAlert2: false
								});
							}}
						>
							<View>
								<Image
									source={require('../../../assets/icon-user.png')}
									style={{ width: 75, height: 75, borderRadius: 75 / 2 }}
								/>
								<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}> Profile </Text>
							</View>
							
						</TouchableHighlight>
					</View>
				);
			} else if (i == 1) {
				return (
					<View>
						<TouchableHighlight
							style={styles.SettingLayout}
							underlayColor="#E5E5E5"
							onPress={() => this.props.navigation.navigate('SettingActivity')}
						>
							<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}> 설정 </Text>
						</TouchableHighlight>
					</View>
				);
			} else if (i == 2) {
				return (
					<View>
						<TouchableHighlight
							style={styles.SettingLayout}
							underlayColor="#E5E5E5"
							onPress={() => this.props.navigation.navigate('ChangeActivity')}
						>
							<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}> 판매자/사용자 전환 </Text>
						</TouchableHighlight>
					</View>
				);
			} else if (i == 3) {
				return (
					<View>
						<TouchableHighlight
							style={styles.SettingLayout}
							underlayColor="#E5E5E5"
							onPress={() => {}}
						>
							<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}> 고객센터 </Text>
						</TouchableHighlight>
					</View>
				);
			} else if (i == 4) {
				return (
					<View>
						<TouchableHighlight
							style={styles.SettingLayout}
							underlayColor="#E5E5E5"
							onPress={() => {}}
						>
							<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}> My Shop </Text>
						</TouchableHighlight>
					</View>
				);
			} else if (i == 5) {
				return (
					<View>
						<TouchableHighlight
							style={styles.SettingLayout}
							underlayColor="#E5E5E5"
							onPress={() => {}}
						>
							<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}> 업주모드 </Text>
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
					data={this.state.dataSource}
					renderItem={({ item }) => (
						<View style={{ flexDirection: 'column', backgroundColor: '#F2F2F2' }}>{item}</View>
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ProfileLayout: {
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#fff',
		margin: 5,
		height: screenHeight * 0.35,
		flex: 1
	},
	SettingLayout: {
		borderRadius: 5,
		borderColor: '#fff',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'right',
		padding: 20,
		margin: 5,
		flex: 1,
		height: screenWidth * 0.5
	}
});
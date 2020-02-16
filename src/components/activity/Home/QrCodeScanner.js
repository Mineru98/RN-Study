import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Animated, TouchableOpacity, Image } from 'react-native';
import { Permissions } from 'react-native-unimodules';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrCodeScanner({ navigation }) {
	const [hasCameraPermission, setCameraPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [animationLineHeight, setAnimationLineHeight] = useState(0);
	const [focusLineAnimation, setFocusLineAnimation] = useState(new Animated.Value(0));

	useEffect(() => {
		getPermissionsAsync();
		animateLine();
	}, []);

	const animateLine = () => {
		Animated.sequence([
			Animated.timing(focusLineAnimation, {
				toValue: 1,
				duration: 1000
			}),
			Animated.timing(focusLineAnimation, {
				toValue: 0,
				duration: 1000
			})
		]).start(animateLine);
	};

	const getPermissionsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		const isPermissionGranted = status === 'granted';
		console.log(isPermissionGranted);
		setCameraPermission(isPermissionGranted);
	};

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		navigation.goBack();
		const obj = { UserId: 0, Name: '' };
		const arr = data.split(',');
		obj.UserId = arr[0].split(':')[1];
		obj.Name = arr[1].split(':')[1].replace(/'/gi, '');
		axios
			.get(`https://server-daliy.run.goorm.io/api/user/qrcode/1/${obj.UserId}`)
			.then(function(response) {
				navigation.push('FriendsActivity', response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
		// navigation.push('FriendsActivity', obj);
	};

	if (hasCameraPermission === null) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>카메라에 접근 권한 요청중...</Text>
			</View>
		);
	}
	if (hasCameraPermission === false) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>카메라에 접근 권한이 없습니다.</Text>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>
			<View style={styles.overlay}>
				<View style={styles.unfocusedContainer} />
				<View style={styles.middleContainer}>
					<View style={styles.unfocusedContainer} />
					<View
						onLayout={e => setAnimationLineHeight(e.nativeEvent.layout.height)}
						style={styles.focusedContainer}
					>
						{!scanned && (
							<Animated.View
								style={[
									styles.animationLineStyle,
									{
										transform: [
											{
												translateY: focusLineAnimation.interpolate({
													inputRange: [0, 1],
													outputRange: [0, animationLineHeight]
												})
											}
										]
									}
								]}
							/>
						)}
						{scanned && (
							<TouchableOpacity
								onPress={() => setScanned(false)}
								style={styles.rescanIconContainer}
							>
								<Image
									source={require('../../../assets/scan-white.png')}
									style={{ width: '100%', height: '100%' }}
								/>
							</TouchableOpacity>
						)}
					</View>
					<View style={styles.unfocusedContainer} />
				</View>
				<View style={styles.unfocusedContainer} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#000'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	unfocusedContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.7)'
	},
	middleContainer: {
		flexDirection: 'row',
		flex: 1.5
	},
	focusedContainer: {
		flex: 6
	},
	animationLineStyle: {
		height: 2,
		width: '100%',
		backgroundColor: 'red'
	},
	rescanIconContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
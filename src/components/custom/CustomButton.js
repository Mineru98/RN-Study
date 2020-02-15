import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default class CustomButton extends Component {
	static defaultProps = {
		type: 1,
		imgName: 'qrcode-scan',
		onPress: () => null
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				{this.props.type == 1 ? <MaterialCommunityIcons name={this.props.imgName} size={20} color="#000" /> : <Ionicons name={this.props.imgName} size={20} color="#000" />}
				
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#fff",
		justifyContent: "center",
		padding: 10,
		margin: 5
	}
});
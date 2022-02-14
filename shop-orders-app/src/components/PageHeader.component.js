import React from "react";
import { StyleSheet, Text } from "react-native";
import { auxColor, darkColor, primaryColor, secondaryColor, whiteColor } from "./ThemeStyle.component";
primaryColor

const PageHeader = ({ title }) => {

	return <>
		<Text style={styles.title} >{title}</Text>
	</>
}

const styles = StyleSheet.create({
	title: {
		color: darkColor(),
		fontWeight: 'bold',
		fontSize: '1.25em',
		paddingVertical: '0.25em',
		paddingBottom: '.75em',
		paddingHorizontal: '.75em',
		borderBottomColor: auxColor(),
		borderBottomWidth: '1px',
		backgroundColor: darkColor(),
		color: whiteColor()
	},
});

export default PageHeader;
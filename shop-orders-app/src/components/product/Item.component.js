import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { auxColor, orangeColor, themeStyles } from "../ThemeStyle.component";

const ProductItem = ({
	id,
	title,
}) => {

	return <>
		<View style={styles.item}>
			<div className="row">
				<div className="col-12">
					<Text style={styles.productName}>{ title }</Text>
					<br />
					<Text style={themeStyles.auxText} >Código: { id }</Text>
				</div>				
			</div>
		</View>
	</>
}

const styles = StyleSheet.create({
	item: {
		marginHorizontal: '1em',
		paddingBottom: '.75em',
		marginVertical: '.75em',
		borderBottomColor: auxColor(),
		borderBottomWidth: '1px'
	},
	productName: {
		fontSize: '1em',
		fontWeight: 'bold',
		color: orangeColor()
	}
})

export default ProductItem;
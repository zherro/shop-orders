import { StyleSheet } from "react-native";

export function primaryColor() {
	return '#A57CE4';
}

export function secondaryColor() {
	return '#D4BCF2';
}

export function auxColor() {
	return '#FBEAFF';
}

export function successColor() {
	return '#00C9A7';
}

export function darkColor() {
	return '#543291';
}

export function whiteColor() {
	return '#fafafa';
}

export function yellowColor() {
	return '#FFCE65';
}

export function orangeColor() {
	return '#FFA37D';
}

export function themeStyles () {
	return StyleSheet.create({
		auxText: {
			color: '#4B4453',
		}
	});
}
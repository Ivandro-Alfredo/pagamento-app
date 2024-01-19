import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { styles } from '../../style/header/header';
// import routes from '../routes/routes';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Header() {
	const navigation = useNavigation();
	return (
		<View>
			<StatusBar barStyle={'light-content'} />
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() =>
						navigation.dispatch(DrawerActions.openDrawer())
					}>
					<FontAwesome name='bars' size={24} color='white' />
				</TouchableOpacity>
				<Text style={styles.headerText}>InvesteMe</Text>
				<TouchableOpacity
					onPress={() =>
						console.log('Clique no ícone de notificação')
					}>
					<Ionicons name='notifications' size={24} color='white' />
				</TouchableOpacity>
			</View>
		</View>
	);
}

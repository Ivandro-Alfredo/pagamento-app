import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Octicons from 'react-native-vector-icons/Octicons';
import { styles } from '../../style/header/header';
import routes from './../../components/routes/routes';
import MenuBurger from '../menu/menu';

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Header() {
	const navigation = useNavigation();

	const handleLogout = async () => {
		try {
			const investidor = await AsyncStorage.getItem('investidor');
			const cliente = await AsyncStorage.getItem('cliente');

			if (investidor === 'investidor' && cliente === null) {
				navigation.navigate(routes.LOGIN);
			} else {
				navigation.navigate(routes.LOGIN);
			}
		} catch (e) {
			// error reading value
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle='light-content' />
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() =>
						navigation.dispatch(DrawerActions.openDrawer())
					}>
					<Octicons name='three-bars' size={24} color='white' />
				</TouchableOpacity>
				<Text style={styles.headerText}>InvesteMe</Text>
				<TouchableOpacity onPress={handleLogout}>
					<AntDesign name='login' size={24} color='white' />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

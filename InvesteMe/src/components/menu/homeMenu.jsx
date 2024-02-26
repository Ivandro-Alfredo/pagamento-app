*import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import routes from '../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

function InvestidorMenu({ isInvestidor, setIsInvestidor }) {
	const [email, setEmail] = useState('');
	const navigation = useNavigation();
	const toggleSwitch = new Animated.Value(0);

	// useEffect(() => {
	// 	Animated.timing(toggleSwitch, {
	// 		toValue: isInvestidor ? 36 : 0,
	// 		duration: 300,
	// 		useNativeDriver: true,
	// 	}).start();
	// }, [isInvestidor]);

	const handleToggleSwitch = async () => {
		try {
			if(isInvestidor===true){
				const cliente = 'cliente'
				const investidor = ''
				await AsyncStorage.setItem('investidor',investidor);
				await AsyncStorage.setItem('cliente',cliente);
				setIsInvestidor(!isInvestidor);
			}
		} catch (e) {}
	};

	const handleEmail = async () => {
		try {
			const email = await AsyncStorage.getItem('userEmail');
			setEmail(email)
		} catch (e) {
			// error reading value
		}
	};

	useEffect(() => {
		handleEmail();
	});

	return (
		<View style={styles.container}>
			<Feather
				name='x'
				size={30}
				color='black'
				onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
				style={styles.closeIcon}
			/>

			{/* Botão de Login */}
			<TouchableOpacity
				style={styles.menuItem}
				onPress={() => navigation.navigate(routes.LOGIN)}>
				<Ionicons name='log-in' size={24} color='black' />
				<Text style={styles.menuItemText}>Logout</Text>
			</TouchableOpacity>

			{/* Botão de Perfil */}
			<TouchableOpacity
				style={styles.menuItem}
				onPress={() => navigateToScreen('PerfilRouteName')}>
				<AntDesign name='user' size={24} color='black' />
				<Text style={styles.menuItemText}>Perfil</Text>
			</TouchableOpacity>

			{/* Botão de pagamento */}
			<TouchableOpacity
				style={styles.menuItem}
				onPress={() => navigation.navigate(routes.PAGAMENTO)}>
				<Ionicons name='card-outline' size={24} color='black' />
				<Text style={styles.menuItemText}>Pagamento</Text>
			</TouchableOpacity>

			{/* Botão de Transferência */}
			<TouchableOpacity
				style={styles.menuItem}
				onPress={() => navigation.navigate(routes.DADOS)}>
				<Ionicons
					name='arrow-forward-outline'
					size={24}
					color='black'
				/>
				<Text style={styles.menuItemText}>Transferência</Text>
			</TouchableOpacity>

			{/* Botão de Histórico */}
			<TouchableOpacity
				style={styles.menuItem}
				onPress={() => navigation.navigate(routes.HISTORICO)}>
				<FontAwesome name='history' size={24} color='black' />
				<Text style={styles.menuItemText}>Histórico</Text>
			</TouchableOpacity>

			{/* Botão de Sobre Nós */}
			<TouchableOpacity
				style={styles.menuItem}
				onPress={() => navigateToScreen('SobreNosRouteName')}>
				<Ionicons
					name='information-circle-outline'
					size={24}
					color='black'
				/>
				<Text style={styles.menuItemText}>Sobre Nós</Text>
			</TouchableOpacity>

			{/* Switch de Motorista/Cliente */}
			<View style={styles.switchContainer}>
				<Text style={styles.switchLabel}>Cliente </Text>
				<TouchableOpacity
					onPress={handleToggleSwitch}
					style={styles.switch}>
					<Animated.View
						style={[
							styles.slider,
							{ transform: [{ translateX: toggleSwitch }] },
						]}>
						<Ionicons name={'person'} size={24} color='white' />
					</Animated.View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingLeft: 20,
	},
	closeIcon: {
		marginBottom: 20,
	},
	menuItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	menuItemText: {
		marginLeft: 10,
		fontSize: 18,
	},
	switchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		width: 120,
	},
	switchLabel: {
		fontSize: 16,
	},
	switch: {
		width: 60,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#ddd',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	slider: {
		position: 'absolute',
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#007bff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default InvestidorMenu;

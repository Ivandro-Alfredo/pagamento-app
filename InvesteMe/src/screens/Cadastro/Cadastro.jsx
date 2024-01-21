import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	Alert,
	ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import routes from './../../components/routes/routes';

export default function Cadastro() {
	const navigation = useNavigation(); // Inicialize o objeto de navegação

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isValidPassword = (password) => {
		return password.length >= 6;
	};

	const submitForm = () => {
		// Verificações básicas
		if (
			!fullName.trim() ||
			!isValidEmail(email) ||
			!isValidPassword(password) ||
			password !== confirmPassword
		) {
			Alert.alert(
				'Erro',
				'Por favor, verifique os campos e tente novamente.'
			);
			return;
		}

		// Se chegou até aqui, os dados são válidos
		console.log('Nome Completo:', fullName);
		console.log('Email:', email);
		console.log('Palavra Passe:', password);

		// Adicione lógica adicional conforme necessário

		// Navegue para a tela de login
		navigation.navigate('Login');
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				{/* Logo e Nome do Aplicativo */}
				<Image
					source={require('../../../assets/logo.png')}
					style={styles.logo}
				/>
				<View style={styles.appNameContainer}>
					<Text style={[styles.appName, { color: '#4caf50' }]}>
						Investe
					</Text>
					<Text
						style={{
							marginVertical: 20,
							fontSize: 20,
							fontWeight: 'bold',
							color: '#800080',
						}}>
						Me
					</Text>
				</View>

				{/* Formulário de Cadastro */}
				<View style={styles.formContainer}>
					<View style={styles.inputContainer}>
						<View style={styles.labelContainer}>
							<Text
								style={[
									styles.labelText,
									{ color: '#424866' },
								]}>
								Nome Completo
							</Text>
							<FontAwesome5
								name='user'
								size={18}
								color='#424866'
							/>
						</View>
						<TextInput
							style={styles.input}
							onChangeText={(text) => setFullName(text)}
							value={fullName}
							placeholder='Digite seu nome completo'
						/>
					</View>

					<View style={styles.inputContainer}>
						<View style={styles.labelContainer}>
							<Text
								style={[
									styles.labelText,
									{ color: '#424866' },
								]}>
								Email
							</Text>
							<FontAwesome5
								name='envelope'
								size={18}
								color='#424866'
							/>
						</View>
						<TextInput
							style={styles.input}
							onChangeText={(text) => setEmail(text)}
							value={email}
							placeholder='Digite seu email'
							keyboardType='email-address'
						/>
					</View>

					<View style={styles.inputContainer}>
						<View style={styles.labelContainer}>
							<Text
								style={[
									styles.labelText,
									{ color: '#424866' },
								]}>
								Palavra Passe
							</Text>
							<FontAwesome5
								name='lock'
								size={18}
								color='#424866'
							/>
						</View>
						<TextInput
							style={styles.input}
							onChangeText={(text) => setPassword(text)}
							value={password}
							placeholder='Digite sua palavra passe'
							secureTextEntry
						/>
					</View>

					<View style={styles.inputContainer}>
						<View style={styles.labelContainer}>
							<Text
								style={[
									styles.labelText,
									{ color: '#424866' },
								]}>
								Confirmar Palavra Passe
							</Text>
							<FontAwesome5
								name='lock'
								size={18}
								color='#424866'
							/>
						</View>
						<TextInput
							style={styles.input}
							onChangeText={(text) => setConfirmPassword(text)}
							value={confirmPassword}
							placeholder='Confirmar a sua palavra passe'
							secureTextEntry
						/>
					</View>
				</View>

				<TouchableOpacity
					style={styles.registerButton}
					onPress={() => navigation.navigate(routes.HOME)}>
					<Text style={styles.buttonText}>Registrar</Text>
					<FontAwesome5 name='arrow-right' size={18} color='white' />
				</TouchableOpacity>

				{/* Botão para navegar para a tela de login */}
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => navigation.navigate('Login')}>
					<Text style={styles.buttonText}>
						Já tem uma conta? Aceder aqui
					</Text>
					<FontAwesome5 name='arrow-right' size={18} color='white' />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		padding: 20,
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	appNameContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	appName: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	formContainer: {
		width: '100%',
		marginTop: 20,
	},
	inputContainer: {
		marginBottom: 20,
	},
	labelContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	labelText: {
		flex: 1,
		fontSize: 16,
	},
	input: {
		width: '100%',
		height: 40,
		borderColor: '#800080',
		borderBottomWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
	},
	registerButton: {
		backgroundColor: '#800080',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
		width: '70%', // Ocupa 100% da largura
	},

	loginButton: {
		backgroundColor: '#424866',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
		width: '70%', // Ocupa 100% da largura
	},
});

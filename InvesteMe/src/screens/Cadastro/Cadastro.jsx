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
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import axios from 'axios';
import routes from '../../components/routes/routes';

export default function Cadastro() {
	const navigation = useNavigation(); // Inicialize o objeto de navegação

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	const isValidPassword = (password) => password.length >= 6;
	const passwordsMatch = (password, confirmPassword) =>
		password === confirmPassword;

	const submitForm = async () => {
		if (!fullName.trim()) {
			Alert.alert('Erro', 'O nome completo é obrigatório.');
			return;
		}
		if (!isValidEmail(email)) {
			Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
			return;
		}
		if (!isValidPassword(password)) {
			Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
			return;
		}
		if (!passwordsMatch(password, confirmPassword)) {
			Alert.alert('Erro', 'As senhas não coincidem.');
			return;
		}

		try {
			// await axios.post(
			// 	// 'http://192.168.43.253:3333/user/registarUsuario',
			// 	// {
			// 	// 	nome: fullName,
			// 	// 	email: email,
			// 	// 	password: password,
			// 	// }
			// );
			navigation.navigate(routes.PUBLIC); 
		} catch (error) {
			Alert.alert(
				'Erro',
				'Falha no cadastro. Por favor, tente novamente.'
			);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Image
					source={require('../../../assets/logo.png')}
					style={styles.logo}
				/>
				<View style={styles.appNameContainer}>
					<Text style={[styles.appName, { color: '#4caf50' }]}>
						Investe
					</Text>
					<Text style={styles.subAppName}>Me</Text>
				</View>

				<View style={styles.formContainer}>
					<TextInput
						style={styles.input}
						placeholder='Nome Completo'
						onChangeText={setFullName}
						value={fullName}
					/>
					<TextInput
						style={styles.input}
						placeholder='Email'
						onChangeText={setEmail}
						value={email}
						keyboardType='email-address'
					/>
					<TextInput
						style={styles.input}
						placeholder='Senha'
						onChangeText={setPassword}
						value={password}
						secureTextEntry
					/>
					<TextInput
						style={styles.input}
						placeholder='Confirmar Senha'
						onChangeText={setConfirmPassword}
						value={confirmPassword}
						secureTextEntry
					/>
				</View>

				<TouchableOpacity style={styles.button} onPress={submitForm}>
					<Text style={styles.buttonText}>Registrar</Text>
					<FontAwesome5 name='arrow-right' size={18} color='white' />
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Login')}>
					<Text style={styles.buttonText}>
						Já tem uma conta? Aceder aqui
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
	},
	scrollContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	logo: {
		width: 120,
		height: 120,
		marginBottom: 20,
		marginTop: 40,
	},
	appNameContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	appName: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	subAppName: {
		marginVertical: 20,
		fontSize: 24,
		fontWeight: 'bold',
		color: '#800080',
	},
	formContainer: {
		width: '100%',
		marginTop: 10,
	},
	input: {
		width: '100%',
		height: 50,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		marginVertical: 10,
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#800080',
		padding: 15,
		borderRadius: 8,
		marginTop: 10,
		width: '100%', // Ajuste para ocupar a largura disponível
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		marginRight: 10, // Espaço entre o texto e o ícone
	},
});

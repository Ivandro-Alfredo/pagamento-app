import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	Alert,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isValidPassword = (password) => {
		// Adicione suas regras de validação de senha aqui (por exemplo, comprimento mínimo)
		return password.length >= 6;
	};

	const submitForm = () => {
		// Verificações básicas
		if (!fullName) {
			Alert.alert('Erro', 'Por favor, digite seu nome completo.');
			return;
		}

		if (!isValidEmail(email)) {
			Alert.alert('Erro', 'Por favor, digite um e-mail válido.');
			return;
		}

		if (!isValidPassword(password)) {
			Alert.alert(
				'Erro',
				'A palavra-passe deve ter pelo menos 6 caracteres.'
			);
			return;
		}

		// Se chegou até aqui, os dados são válidos
		console.log('Nome Completo:', fullName);
		console.log('Email:', email);
		console.log('Palavra Passe:', password);

		// Adicione lógica adicional conforme necessário
	};

	return (
		<View style={styles.container}>
			{/* Logo e Nome do Aplicativo */}
			<Image source={require('../../../assets/logo.png')} style={styles.logo} />
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
						<Text style={[styles.labelText, { color: '#424866' }]}>
							Nome Completo
						</Text>
						<FontAwesome5 name='user' size={18} color='#424866' />
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
						<Text style={[styles.labelText, { color: '#424866' }]}>
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
						<Text style={[styles.labelText, { color: '#424866' }]}>
							Palavra Passe
						</Text>
						<FontAwesome5 name='lock' size={18} color='#424866' />
					</View>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setPassword(text)}
						value={password}
						placeholder='Digite sua palavra passe'
						secureTextEntry
					/>
				</View>
			</View>

			<TouchableOpacity style={styles.button} onPress={submitForm}>
				<Text style={styles.buttonText}>Registrar</Text>
			</TouchableOpacity>

			{/* Botão sem fundo com riscas roxas */}
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Aceder Conta</Text>
			</TouchableOpacity>
		</View>
	);
}

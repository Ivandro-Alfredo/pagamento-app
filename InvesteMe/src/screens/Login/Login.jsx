import React, { useState } from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity,Image,Alert,ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from '../../style/login/loginStyle'
import routes from '../../components/routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Login() {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};
	const isValidPassword = (password) => {
		return password.length >= 6;
	};
	const submitForm = async () => {
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
		try {
			// const response = await axios.post(
			// 	'http://192.168.43.253:3333/user/login',
			// 	{
			// 		email: email,
			// 		password: password,
			// 	}
			// );
			try{
				await AsyncStorage.setItem('userEmail', email);
				const investidor = await AsyncStorage.getItem('investidor');
				const cliente = await AsyncStorage.getItem('cliente');
				if (investidor === 'investidor' && cliente === null) {
					navigation.navigate(routes.INVESTIDOR);
				} else {
					navigation.navigate(routes.PUBLIC);
				}
			}catch(e){}
		} catch (error) {
			Alert.alert('Erro', 'Falha no login. Por favor, tente novamente.');
		}
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
				</View>
				<TouchableOpacity style={styles.button} onPress={submitForm}>
					<Text style={styles.buttonText}>Aceder Conta</Text>
				</TouchableOpacity>
				{/* Botão sem fundo com riscas roxas */}
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate(routes.REGISTAR)}>
					<Text style={styles.buttonText}>Registrar</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}
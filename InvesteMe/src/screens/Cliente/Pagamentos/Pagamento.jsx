import React, { useState,useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	TextInput,
	StyleSheet,
	Alert,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { DrawerActions } from '@react-navigation/native';
import routes from '../../../components/routes/routes';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pagamento = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [selectedArea, setSelectedArea] = useState('');
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	const [isAreaModalVisible, setAreaModalVisible] = useState(false);
	const [isPaymentMethodModalVisible, setPaymentMethodModalVisible] = useState(false);

	// Estados específicos para cada forma de pagamento
	const [creditCardNumber, setCreditCardNumber] = useState('');
	const [boletoCode, setBoletoCode] = useState('');
	const [transferBank, setTransferBank] = useState('');
	const [nfcData, setNfcData] = useState('');
	const [qrCodeData, setQrCodeData] = useState('');
	const [pixKey, setPixKey] = useState('');
	const [payPalEmail, setPayPalEmail] = useState('');
	const [googlePayAccount, setGooglePayAccount] = useState('');


	const [paymentMethods, setPaymentMethods] = useState([
		'Visa',
		'MasterCard',
	]);

	const openAreaModal = () => setAreaModalVisible(true);
	const closeAreaModal = () => setAreaModalVisible(false);
	const openPaymentMethodModal = () => setPaymentMethodModalVisible(true);
	const closePaymentMethodModal = () => setPaymentMethodModalVisible(false);


	const handleEmail = async () => {
		try {
			const email = await AsyncStorage.getItem('userEmail');
			setEmail(email);
		} catch (e) {
			// error reading value
		}
	};

	useEffect(() => {
		handleEmail();
	});

	const handleAreaSelection = (area) => {
		setSelectedArea(area);
		closeAreaModal();
	};

	const handlePaymentMethodSelection = (method) => {
		setSelectedPaymentMethod(method);
		// Limpe as informações relacionadas ao método de pagamento ao mudar a seleção
		setCreditCardNumber('');
		setBoletoCode('');
		setTransferBank('');
		setNfcData('');
		setQrCodeData('');
		setPixKey('');
		setPayPalEmail('');
		setGooglePayAccount('');
		closePaymentMethodModal();
	};

	// Função ajustada para enviar os dados para o backend
	const handleForwardButton = async () => {
		// Preparando os dados para enviar
		const paymentData = {
			email: email,
			valor: amount, 
			moeda: 'usd', 
			card: creditCardNumber, 
			descricao: description,
		};

		try {
			const response = await axios.post(
				'http://192.168.43.253:3333/pagamento/processar',
				paymentData
			);

			if (response.status === 200) {
				navigation.navigate(routes.CONFIRMACAO)
			} else {
				Alert.alert('Erro', 'Não foi possível processar o pagamento.');
			}
		} catch (error) {
			console.error('Erro ao processar o pagamento:', error);
			Alert.alert(
				'Erro',
				'Ocorreu um erro ao tentar processar o pagamento.'
			);
		}
	};

	const handleVoltarButton = async () => {
		try {
			const investidor = await AsyncStorage.getItem('investidor');
			const cliente = await AsyncStorage.getItem('cliente');

			console.log('investidor: ', investidor)
			console.log('cliente: ', cliente)
			if (investidor === 'investidor' && cliente === null) {
				navigation.navigate(routes.INVESTIDOR);
			} else {
				navigation.navigate(routes.PUBLIC);
			}
		} catch (e) {
			// error reading value
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() =>
						navigation.dispatch(DrawerActions.openDrawer())
					}>
					<Octicons name='three-bars' size={24} color='white' />
				</TouchableOpacity>
				<Text style={styles.headerText}>InvesteMe</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<AntDesign name='login' size={24} color='white' />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.inputContainer}>
					<Text>Escolha a forma de Pagamento</Text>
					<TouchableOpacity
						style={styles.selectButton}
						onPress={openPaymentMethodModal}>
						<Text>
							{selectedPaymentMethod ||
								'Selecione a forma de pagamento'}
						</Text>
					</TouchableOpacity>
				</View>

				{selectedPaymentMethod === 'Visa' && (
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Número do Cartão:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira o número do cartão'
							value={creditCardNumber}
							onChangeText={(text) => setCreditCardNumber(text)}
						/>

						<Text style={styles.inputLabel}>Valor:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira o valor'
							value={amount}
							onChangeText={(text) => setAmount(text)}
						/>

						<Text style={styles.inputLabel}>Descrição:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira a sua Descrição'
							value={description}
							onChangeText={(text) => setDescription(text)}
						/>
					</View>
				)}

				{selectedPaymentMethod === 'MasterCard' && (
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Número do Cartão</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira o código do boleto'
							value={creditCardNumber}
							onChangeText={(text) => setCreditCardNumber(text)}
						/>
						<Text style={styles.inputLabel}>Valor:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira o valor'
							value={amount}
							onChangeText={(text) => setAmount(text)}
						/>
						<Text style={styles.inputLabel}>Descrição:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira a sua Descrição'
							value={description}
							onChangeText={(text) => setDescription(text)}
						/>
					</View>
				)}

				{selectedPaymentMethod === 'Transferência' && (
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Banco Destino:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira o número de destino'
							value={transferBank}
							onChangeText={(text) => setTransferBank(text)}
						/>
					</View>
				)}

				{selectedPaymentMethod === 'NFC' && (
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>
							Informações de Pagamento por NFC:
						</Text>
						<TextInput
							style={styles.input}
							placeholder='Digite as informações de pagamento por NFC'
							value={nfcData}
							onChangeText={(text) => setNfcData(text)}
						/>
					</View>
				)}

				{selectedPaymentMethod === 'Código QR' && (
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>
							Informações de Pagamento por Código QR:
						</Text>
						<TextInput
							style={styles.input}
							placeholder='Digite as informações de pagamento por Código QR'
							value={qrCodeData}
							onChangeText={(text) => setQrCodeData(text)}
						/>
					</View>
				)}

				{selectedPaymentMethod === 'Pix' && (
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Chave Pix:</Text>
						<TextInput
							style={styles.input}
							placeholder='Insira a chave do Pix'
							value={pixKey}
							onChangeText={(text) => setPixKey(text)}
						/>
					</View>
				)}

				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={handleVoltarButton}>
						<AntDesign name='arrowleft' size={24} color='green' />
						<Text style={styles.buttonText}> Voltar </Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.nextButton}
						onPress={handleForwardButton}>
						<Text style={styles.buttonText2}>Avançar </Text>
						<AntDesign name='arrowright' size={24} color='white' />
					</TouchableOpacity>
				</View>
			</View>

			{isAreaModalVisible && (
				<View style={styles.modal}>
					<FlatList
						data={areas}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.modalItem}
								onPress={() => handleAreaSelection(item)}>
								<Text>{item}</Text>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item}
						style={styles.modalList}
					/>
				</View>
			)}

			{isPaymentMethodModalVisible && (
				<View style={styles.modal}>
					<FlatList
						data={paymentMethods}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.modalItem}
								onPress={() =>
									handlePaymentMethodSelection(item)
								}>
								<Text>{item}</Text>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item}
						style={styles.modalList}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#00aa00',
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchLabel: {
		fontSize: 16,
		margin: 10,
	},
	inputContainer: {
		marginBottom: 20,
		width: '80%',
	},
	inputLabel: {
		fontSize: 14,
		marginBottom: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: '#00aa00',
		backgroundColor: '#fff',
		color: '#000',
		padding: 10,
		borderRadius: 5,
	},
	selectButton: {
		borderWidth: 1,
		borderColor: '#00aa00',
		backgroundColor: '#fff',
		color: '#000',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	modal: {
		position: 'absolute',
		width: '80%',
		alignSelf: 'center',
		top: '50%',
		transform: [{ translateY: -50 }],
		backgroundColor: '#fff',
		borderRadius: 10,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	modalList: {
		maxHeight: 200,
	},
	modalItem: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		width: '100%',
		alignItems: 'center',
	},
	navigationButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		marginBottom: 20,
		marginTop: 40,
	},
	backButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#00CC47',
		padding: 10,
		borderRadius: 5,
		marginRight: 100,
	},
	nextButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#00CC47',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		marginLeft: 5,
		color: 'black',
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonText2: {
		marginLeft: 5,
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default Pagamento;

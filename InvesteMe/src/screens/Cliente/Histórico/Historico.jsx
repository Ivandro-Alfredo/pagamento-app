import React, { useState, useRef, useEffect } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	Modal,
	Image,
	StatusBar,
} from 'react-native';
import { FontAwesome, Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import routes from '../../../components/routes/routes';
import { styles } from '../../../style/historico/historicoStyle';
import axios from 'axios';

const HistoryScreen = () => {
	const navigation = useNavigation();
	const [historyData, setHistoryData] = useState([
		{
			id: '1',
			date: '15/02/2023',
			description: 'Compra no Mercado',
			amount: '-$50.00',
			status: 'Pago',
		},
		{
			id: '2',
			date: '10/02/2023',
			description: 'Depósito',
			amount: '+$100.00',
			status: 'Pendente',
		},
		// Adicione mais itens de histórico conforme necessário
	]);

	const [selectedTransaction, setSelectedTransaction] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [filterType, setFilterType] = useState('status');
	const [searchTerm, setSearchTerm] = useState('');
	const [atividades, setAtividades] = useState([]);
	const [email, setEmail] = useState([]);

	const searchInputRef = useRef(null);
	const renderHistoryItem = ({ item }) => (
		<TouchableOpacity
			style={styles.historyItem}
			onPress={() => handleTransactionPress(item)}>
			<Text style={styles.dateText}>{item.date}</Text>
			<Text style={styles.descriptionText}>{item.description}</Text>
			<Text style={styles.amountText}>{item.amount}</Text>
			<Text style={styles.statusText}>{item.status}</Text>
			<FontAwesome name='chevron-right' size={16} color='#888' />
		</TouchableOpacity>
	);

	const handleTransactionPress = (transaction) => {
		setSelectedTransaction(transaction);
		setModalVisible(true);
	};

	const handleFilterChange = (type) => {
		setFilterType(type);
		setSearchTerm(''); // Limpar o termo de pesquisa ao mudar o tipo de filtro
		searchInputRef.current?.focus(); // Focar no input de pesquisa
	};

	const filteredHistory = historyData.filter((item) => {
		const lowercaseSearchTerm = searchTerm.toLowerCase();
		if (filterType === 'status') {
			return item.status.toLowerCase().includes(lowercaseSearchTerm);
		} else if (filterType === 'date') {
			return item.date.includes(searchTerm);
		} else if (filterType === 'id') {
			return item.id.includes(searchTerm);
		}
		return true; // Retorna todos se nenhum filtro aplicado
	});

	const loadAtividade = async () => {
		try {
			const response = await axios.get(
				'http://192.168.43.253:3333/pagamento/pesuisar_all'
			);
			if (response.data.sucesso) {
				const historico = response.data.historico.map((item) => {
					return {
						id: item.pagamentoid || item.transferenciaid,
						date: new Date(item.data).toLocaleDateString(),
						description:
							item.descricao || 'Descrição não disponível',
						amount: `${item.valor.toFixed(2)} ${item.moeda}`,
						status:
							item.proprietario === email
								? 'Pago'
								: 'Pendente',
            			tipo: item.pagamentoid ? 'pagamento' : 'transferencia',
					};
          
				});
				setAtividades(historico);
			} else {
				console.error('Erro ao carregar histórico de pagamento');
			}
		} catch (error) {
			console.error('Erro ao carregar histórico de pagamento:', error);
		}
	};

	const handleEmail = async () => {
		try {
			const email = await AsyncStorage.getItem('userEmail');
			setEmail(email)
		} catch (e) {
			// error reading value
		}
	};


	//definindo o useEffet
	useEffect(() => {
		handleEmail();
		loadAtividade();
	});

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
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle='light-content' />
				<View style={styles.header}>
					<TouchableOpacity onPress={handleVoltarButton}>
						<AntDesign name='arrowleft' size={24} color='white' />
					</TouchableOpacity>
					<Text style={styles.headerText}>
						Historico de Pagamento
					</Text>
				</View>
			</SafeAreaView>

			<FlatList
				data={atividades}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.historyItem}
						onPress={() => handleTransactionPress(item)}>
						<Text style={styles.dateText}>{item.date}</Text>
						<Text style={styles.descriptionText}>
							{item.tipo === 'transferencia'
								? 'Transferência'
								: 'Pagamento'}
						</Text>
						<FontAwesome
							name='chevron-right'
							size={16}
							color='#888'
						/>
					</TouchableOpacity>
				)}
			/>

			<Modal
				animationType='slide'
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}>
				<View style={styles.modalContainer}>

					<Text style={styles.modalTitle}>Detalhes da Transação</Text>
					{selectedTransaction && (
						<>
							<Text>ID: {selectedTransaction.id}</Text>
							<Text>Data: {selectedTransaction.date}</Text>
							<Text>Estado: {selectedTransaction.status}</Text>
							<Text>
								Descrição: {selectedTransaction.description}
							</Text>
							<Text>Valor: {selectedTransaction.amount}</Text>
							{/* Adicionando uma imagem de comprovante (substitua a URL com a sua imagem) */}
							<Image
								source={{
									uri: 'https://via.placeholder.com/200',
								}}
								style={styles.receiptImage}
							/>
						</>
					)}

					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Text style={styles.modalCloseText}>Fechar</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

export default HistoryScreen;

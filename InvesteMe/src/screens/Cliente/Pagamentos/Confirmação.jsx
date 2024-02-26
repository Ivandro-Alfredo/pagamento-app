import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/headers/header';
import routes from '../../../components/routes/routes';

const Confirmacao = () => {
  const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Header/>
			{/* Conteúdo da Home */}
			<View style={styles.content}>
				<Text style={styles.statusText}>Pagamento Efetuado</Text>
				<FontAwesome name='check-circle' size={50} color='#00aa00' />

				<Text style={styles.infoText}>
					<Text style={styles.boldText}>Pague de forma facil e segura com InvesteMe</Text>
				</Text>
        <TouchableOpacity
						style={styles.nextButton}
            onPress={() => navigation.navigate(routes.PAGAMENTO)}
						>
						<Text style={styles.buttonText2}> Continuar </Text>
						<AntDesign name='arrowright' size={24} color='white' />
					</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
	},
	header: {
		backgroundColor: '#00aa00',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	statusText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#00aa00',
		marginBottom: 10,
	},
	infoText: {
		fontSize: 18,
		color: '#444',
		textAlign: 'center',
		marginBottom: 20,
		lineHeight: 24,
	},
	boldText: {
		fontWeight: 'bold',
		color: '#333',
	},
  nextButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#00CC47',
		padding: 10,
		borderRadius: 5,
	},
});

export default Confirmacao;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,  
		backgroundColor: '#f8f8f8',
	},
	formsContainer: {
		backgroundColor: '#FFFFFF',
		marginLeft: 50,
		marginRight: 10,
		padding: 22,
		marginTop: 25,
		width: 300,
		height: 345,
		borderRadius: 9,
		shadowColor: '#000',
		shadowOffset: {
			width: 10,
			height: 8,
		},
		shadowOpacity: 0.4,
		shadowRadius: 4,
		elevation: 5,
	},
	forms: {
		backgroundColor: '#FFFFFF',
		width: 250,
		height: 200,
		marginTop: 30,
		
	},
	inputRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},

	label: {
		flex: 1,
		marginRight: 10,
	},

	numericInput: {
		height: 35,
		width: 120,
		borderColor: 'gray',
		justifyContent: 'space-between',
		borderWidth: 1,
		paddingLeft: 10,
		borderRadius: 10,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 10,
		borderRadius: 10,
	},
	continueButtonContainer: {
		width: 140,
		height: 40,
		borderRadius: 10,
		alignSelf: 'flex-end',
		borderColor: '#00CC47',
		
	},
	TextMe: {
		color: '#843EF7',
	},
	TextInveste: {
		color: '#00CC47',
	},
	TextApresetation: {
		fontWeight: 'bold',
		fontSize: 26,
	},
	presentationView: {
		padding: 12,
	},
	textoFoco: {
		padding: 14,
		texto: {
			color: '#202020',
			fontSize: 14,
		},
	},
	textoIntro: {
		color: '#202020',
		fontWeight: 'bold',
		fontSize: 18,
		padding: 18,
		marginLeft: 40,
	},
	pickerContainer: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
		overflow: 'hidden',
		height: 42,
	},
	picker: {
		height: 50,
		width: '100%',
	},
	imagemTutorial: {
		padding: 8,
		imagem: {
			width: 300,
			height: 200,
			marginLeft:1,
			borderRadius: 30,
			marginBottom: 20,
			resizeMode: 'cover',
		},
	},
	linearGradient: {
		padding: 10,
	},
	gradientView: {
		backgroundColor: '#FFFFFF',
		width: 300,
		height: 250,
		borderRadius: 30,
		marginTop: 15,
		marginBottom: 10,
		marginRight:30,
		
		texto: {
			color: '#FFFFFF',
			fontSize: 27,
			fontWeight: 'bold',
			padding: 22,
			alignSelf: 'center',
		},
		queroInvestirTexto: {
			color: '#00CC47',
			fontSize: 23,
			fontWeight: 'bold',
			padding: 15,
			marginTop: 75,
		},
		investir: {
			fontSize: 18,
			padding: 12,
			color: '#202020',
		},
		financiado: {
			color: '#00CC47',
			fontSize: 22,
			fontWeight: 'bold',
			padding: 15,
			marginTop: 75,
		},
		financiador: {
			fontSize: 18,
			padding: 12,
			color: '#202020',
		},
		pagamento: {
			color: '#00CC47',
			fontSize: 22,
			fontWeight: 'bold',
			padding: 15,
			marginTop: 75,
		},
		pagar: {
			fontSize: 18,
			padding: 12,
			color: '#202020',
		},
	},
	showImage:{
		padding:15,
		marginBottom:20,
		texto:{
			alignSelf:'center',
			padding:15,
			fontSize: 24,
		},imagem1:{
			width: 270,
			borderRadius: 5,
			marginBottom: 20,
			resizeMode: 'cover',
			alignSelf:'center',
		},
		imagem2:{
			width: 270,
			borderRadius: 5,
			marginBottom: 20,
			resizeMode: 'cover',
			alignSelf:'center',
		},
		imagem3:{
			width: 270,
			borderRadius: 5,
			marginBottom: 20,
			resizeMode: 'cover',
			alignSelf:'center',
		},
		
	},
});

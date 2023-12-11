import { StyleSheet } from 'react-native';

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
		flexDirection: 'row',
		alignItems: 'center',
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
	button: {
		backgroundColor: '#800080',
		padding: 15,
		borderRadius: 8,
		alignItems: 'center',
		marginBottom: 10,
		width: '70%', // Ocupa 100% da largura
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

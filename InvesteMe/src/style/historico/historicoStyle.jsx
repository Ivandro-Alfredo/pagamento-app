import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
        marginRight:18
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 20,
	},
	filterButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	filterText: {
		fontSize: 16,
		color: '#00aa00',
	},
	activeFilter: {
		fontWeight: 'bold',
	},
	searchInput: {
		height: 40,
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	historyItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		paddingVertical: 10,
	},
	dateText: {
		fontSize: 16,
		color: '#666',
	},
	descriptionText: {
		fontSize: 16,
		color: '#333',
	},
	amountText: {
		fontSize: 16,
		color: '#00aa00',
	},
	statusText: {
		fontSize: 16,
		color: '#333',
	},
	receiptImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
		marginVertical: 10,
	},
	modalContainer: {
		flex: 1,
		backgroundColor: '#f8f8f8',
		padding: 20,
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 20,
	},
	modalCloseText: {
		fontSize: 18,
		color: '#00aa00',
		marginTop: 20,
	},
    backButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#00CC47',
        padding: 10,
        borderRadius: 5,
        color:'#FFFFFF'
    },
    
});

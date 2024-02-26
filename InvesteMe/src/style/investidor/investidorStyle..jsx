import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	safeArea: {
		flex: 0,
		backgroundColor: '#00aa00',
	},
	scrollView: {
		flex: 1,
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
		color: 'white',
	},
	searchBarContainer: {
		backgroundColor: '#fff',
		padding: 16,
	},
	filterButton: {
		marginTop: 8,
		backgroundColor: '#00aa00',
	},
	container: {
		flex: 1,
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
	},
	itemImage: {
		width: 160,
		height: 120,
		margin: 8,
	},
	itemTextContainer: {
		flex: 1,
		marginLeft: 8,
	},
	itemTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	itemDescription: {
		fontSize: 14,
		color: '#666',
		marginTop: 4,
	},
	progressBar: {
		height: 8,
		backgroundColor: '#ccc',
		borderRadius: 4,
		overflow: 'hidden',
		marginTop: 4,
	},
	progressText: {
		fontSize: 12,
		color: '#666',
		marginTop: 4,
	},
	investButton: {
		backgroundColor: '#00aa00',
		padding: 8,
		borderRadius: 8,
		marginTop: 8,
	},
	investButtonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

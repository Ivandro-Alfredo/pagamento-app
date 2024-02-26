import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons } from '@expo/vector-icons';
import { Button, Icon, Input, Rating, Divider } from 'react-native-elements';
import { styles } from "../../style/cliente/clienteStyle";

export const SearchBar = ({ onSearch }) => {
	const [searchText, setSearchText] = useState('');
	const handleSearch = () => {
		onSearch(searchText);
	};

	return (
		<View style={styles.searchBarContainer}>
			<Input
				placeholder='Pesquisar...'
				leftIcon={<Icon name='search' type='font-awesome' />}
				onChangeText={(text) => setSearchText(text)}
				value={searchText}
			/>
			<Button
				title='Filtrar'
				buttonStyle={styles.filterButton}
				onPress={handleSearch}
			/>
		</View>
	);
};
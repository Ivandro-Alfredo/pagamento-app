import React, { useState } from 'react';
import {
	Text,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	View,
	Image,
	SafeAreaView,
} from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Button, Icon, Input, Rating, Divider } from 'react-native-elements';
import routes from '../../components/routes/routes';
import { styles } from '../../style/cliente/clienteStyle';
import Header from '../../components/headers/header'
import { SearchBar } from '../../components/search/search';

// Componente BestMatch
const BestMatch = ({
	name,
	skills,
	image,
	investDescription,
	rating,
	reviews,
	location,
}) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<View style={styles.bestMatchContainer}>
      <Header/>
      <SearchBar/>
      
			<View style={styles.matchHeader}>
				<Image source={{ uri: image }} style={styles.matchImage} />
				<View style={styles.matchInfo}>
					<View>
						<Text style={styles.matchName}>{name}</Text>
						<Text style={styles.matchSkills}>
							{skills.join(', ')}
						</Text>
						<View style={styles.locationContainer}>
							<Octicons name='location' size={16} color='#666' />
							<Text style={styles.locationText}>{location}</Text>
						</View>
					</View>
					<Button
						title='Analisar'
						buttonStyle={styles.investButton}
					/>
				</View>
			</View>

			<Text style={styles.investDescription}>{investDescription}</Text>

			{showDetails && (
				<View style={styles.detailsContainer}>
					<Text style={styles.detailsTitle}>Web design</Text>
					<View style={styles.ratingContainer}>
						<Rating
							type='star'
							imageSize={16}
							readonly
							startingValue={rating}
							style={styles.ratingIcon}
						/>
						<Text>{`${rating}/5 estrelas`}</Text>
					</View>
					<Text>{`(${reviews} Avaliações)`}</Text>
				</View>
			)}

			<TouchableOpacity
				onPress={toggleDetails}
				style={styles.learnMoreButton}>
				<Text style={styles.learnMoreText}>
					{showDetails ? 'Menos' : 'Saiba Mais'}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

// Componente HomeScreen
const Cliente = ({ navigation }) => {
	const bestMatchesData = [
		{
			name: 'Bhuvesh Singh',
			skills: ['Designer UX', 'Designer Gráfico'],
			image: 'https://picsum.photos/id/1018/64/64',
			investDescription: 'Investimento de Kz 76.000.00',
			location: 'Manhattan, EUA',
			rating: 4,
			reviews: 12,
		},
		{
			name: 'Mariya Sarapova',
			skills: ['Contabilidade', 'Fiscalidade'],
			image: 'https://picsum.photos/id/1018/64/64',
			investDescription: 'Investimento de Kz 76M em design web e mobile',
			location: 'Manhattan, EUA',
			rating: 4,
			reviews: 12,
		},
		{
			name: 'Aghata Singh',
			skills: ['Designer UX', 'Designer Gráfico'],
			image: 'https://picsum.photos/id/1018/64/64',
			investDescription: 'Investimento de Kz 76M em design web e mobile',
			location: 'Manhattan, EUA',
			rating: 4,
			reviews: 12,
		},
	];

	const [filteredData, setFilteredData] = useState(bestMatchesData);

	const handleSearch = (searchText) => {
		const filteredMatches = bestMatchesData.filter((match) =>
			match.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredData(filteredMatches);
	};

	return (
		<ScrollView style={styles.scrollView}>
			<Header navigation={navigation} />
			<SearchBar onSearch={handleSearch} />

			{filteredData.map((data, index) => (
				<React.Fragment key={index}>
					<BestMatch {...data} />
					{index < filteredData.length - 1 && (
						<Divider style={styles.divider} />
					)}
				</React.Fragment>
			))}
		</ScrollView>
	);
};

export default Cliente;

import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import routes from '../../components/routes/routes';
import { DrawerActions } from '@react-navigation/native';
import { styles } from '../../style/investidor/investidorStyle.';
import Header from "../../components/headers/header";
import { SearchBar } from '../../components/search/search';
import { AsyncStorage } from 'react-native';

const ProgressBar = ({ progress, color }) => {
	return (
		<View style={styles.progressBar}>
			<View
				style={{
					width: `${progress * 100}%`,
					backgroundColor: color,
					flex: 1,
				}}
			/>
		</View>
	);
};

const Investidor = ({ navigation }) => {
	const [userEmail, setUserEmail] = useState('');
    useEffect(() => {
        const fetchUserEmail = async () => {
            const email = await AsyncStorage.getItem('userEmail');
            setUserEmail(email);
        };
        fetchUserEmail();
    }, []);

	const projects = [
		{
			id: 1,
			title: 'Web Design X',
			description: 'An amazing crowdfunding project for web design.',
			imageUrl: 'https://picsum.photos/id/1018/64/64',
			goal: 60000,
			funded: 45000,
		},
		{
			id: 2,
			title: 'Graphic Design Y',
			description: 'Help fund this creative graphic design project.',
			imageUrl: 'https://picsum.photos/id/1018/64/64',
			goal: 80000,
			funded: 60000,
		},
		{
			id: 3,
			title: 'Graphic Design Y',
			description: 'Help fund this creative graphic design project.',
			imageUrl: 'https://picsum.photos/id/1018/64/64',
			goal: 80000,
			funded: 60000,
		},
		{
			id: 4,
			title: 'Graphic Design Y',
			description: 'Help fund this creative graphic design project.',
			imageUrl: 'https://picsum.photos/id/1018/64/64',
			goal: 80000,
			funded: 60000,
		},	
	];


	const [filteredProjects, setFilteredProjects] = useState(projects);
	const handleInvestPress = (project) => {
		alert(`Você investiu em "${project.title}"!`);
	};
	const handleSearch = (text) => {
		const filteredMatches = projects.filter((project) =>
			project.title.toLowerCase().includes(text.toLowerCase())
		);
		setFilteredProjects(filteredMatches);
	};

	return (
		<View style={styles.container}>
			<Header  />
			<SearchBar onSearch={handleSearch} />
			<ScrollView style={styles.scrollView}>
				{filteredProjects.map((project) => (
					<TouchableOpacity
						key={project.id}
						onPress={() => handleInvestPress(project)}>
						<View style={styles.itemContainer}>
							<Image
								source={{ uri: project.imageUrl }}
								style={styles.itemImage}
							/>
							<View style={styles.itemTextContainer}>
								<Text style={styles.itemTitle}>
									{project.title}
								</Text>
								<Text style={styles.itemDescription}>
									{project.description}
								</Text>
								<ProgressBar
									progress={project.funded / project.goal}
									color='#00aa00'
								/>
								<Text
									style={
										styles.progressText
									}>{`Kz ${project.funded} arrecadados de Kz ${project.goal}`}</Text>
								<TouchableOpacity
									style={styles.investButton}
									onPress={() =>
										// await AsyncStorage.setItem('userEmail', email);
										navigation.navigate(routes.PAGAMENTO)
									}>
									<Text style={styles.investButtonText}>
										Investir
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default Investidor;

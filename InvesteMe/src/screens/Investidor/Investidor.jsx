import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { EvilIcons, Ionicons, AntDesign, Octicons } from '@expo/vector-icons';
import { Button, Icon, Input, Rating, Divider } from 'react-native-elements';
import routes from '../../components/routes/routes';
import { DrawerActions } from '@react-navigation/native';


const ProgressBar = ({ progress, color }) => {
  return (
    <View style={styles.progressBar}>
      <View style={{ width: `${progress * 100}%`, backgroundColor: color, flex: 1 }} />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>InvesteMe</Text>

<TouchableOpacity
onPress={() => navigation.navigate(routes.PUBLIC)} >
        <AntDesign name="home" size={24} color="white" />
</TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
};

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      <Input
        placeholder="Pesquisar projetos..."
        leftIcon={<Icon name="search" type="font-awesome" />}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <Button title="Filtrar" buttonStyle={styles.filterButton} onPress={handleSearch} />
    </View>
  );
};

const Investidor = ({ navigation }) => {
  const projects = [
    {
      id: 1,
      title: 'Web Design X',
      description: 'An amazing crowdfunding project for web design.',
      imageUrl: "https://picsum.photos/id/1018/64/64",
      goal: 60000,
      funded: 45000,
    },
    {
      id: 2,
      title: 'Graphic Design Y',
      description: 'Help fund this creative graphic design project.',
      imageUrl: "https://picsum.photos/id/1018/64/64",
      goal: 80000,
      funded: 60000,
    },
    {
        id: 3,
        title: 'Graphic Design Y',
        description: 'Help fund this creative graphic design project.',
        imageUrl: "https://picsum.photos/id/1018/64/64",
        goal: 80000,
        funded: 60000,
      },
      {
        id: 4,
        title: 'Graphic Design Y',
        description: 'Help fund this creative graphic design project.',
        imageUrl: "https://picsum.photos/id/1018/64/64",
        goal: 80000,
        funded: 60000,
      },
    // Adicione mais projetos conforme necessário
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
      <Header navigation={navigation} />
      <SearchBar onSearch={handleSearch} />
      <ScrollView style={styles.scrollView}>
        {filteredProjects.map((project) => (
          <TouchableOpacity key={project.id} onPress={() => handleInvestPress(project)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: project.imageUrl }} style={styles.itemImage} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>{project.title}</Text>
                <Text style={styles.itemDescription}>{project.description}</Text>
                <ProgressBar progress={project.funded / project.goal} color="#00aa00" />
                <Text style={styles.progressText}>{`Kz ${project.funded} arrecadados de Kz ${project.goal}`}</Text>
                <TouchableOpacity style={styles.investButton} onPress={() => navigation.navigate(routes.PAGAMENTO)}>
                  <Text style={styles.investButtonText}>Investir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Investidor;

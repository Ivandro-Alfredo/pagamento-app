import React, { useState } from "react";
import {
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Button, Icon, Input, Rating, Divider } from "react-native-elements";
import routes from "../../components/routes/routes";

// Componente Header
const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
onPress={() => navigation.dispatch(DrawerActions.openDrawer())}        >
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>InvesteMe</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
          <AntDesign name="login" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Componente Barra de Pesquisa
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      <Input
        placeholder="Pesquisar..."
        leftIcon={<Icon name="search" type="font-awesome" />}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <Button
        title="Filtrar"
        buttonStyle={styles.filterButton}
        onPress={handleSearch}
      />
    </View>
  );
};

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
      <View style={styles.matchHeader}>
        <Image source={{ uri: image }} style={styles.matchImage} />
        <View style={styles.matchInfo}>
          <View>
            <Text style={styles.matchName}>{name}</Text>
            <Text style={styles.matchSkills}>{skills.join(", ")}</Text>
            <View style={styles.locationContainer}>
              <Octicons name="location" size={16} color="#666" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
          <Button title="Analisar" buttonStyle={styles.investButton} />
        </View>
      </View>

      <Text style={styles.investDescription}>{investDescription}</Text>

      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Web design</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="star"
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

      <TouchableOpacity onPress={toggleDetails} style={styles.learnMoreButton}>
        <Text style={styles.learnMoreText}>
          {showDetails ? "Menos" : "Saiba Mais"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente HomeScreen
const Cliente = ({ navigation }) => {
  const bestMatchesData = [
    {
      name: "Bhuvesh Singh",
      skills: ["Designer UX", "Designer Gráfico"],
      image: "https://picsum.photos/id/1018/64/64",
      investDescription: "Investimento de Kz 76.000.00",
      location: "Manhattan, EUA",
      rating: 4,
      reviews: 12,
    },
    {
      name: "Mariya Sarapova",
      skills: ["Contabilidade", "Fiscalidade"],
      image: "https://picsum.photos/id/1018/64/64",
      investDescription: "Investimento de Kz 76M em design web e mobile",
      location: "Manhattan, EUA",
      rating: 4,
      reviews: 12,
    },
    {
      name: "Aghata Singh",
      skills: ["Designer UX", "Designer Gráfico"],
      image: "https://picsum.photos/id/1018/64/64",
      investDescription: "Investimento de Kz 76M em design web e mobile",
      location: "Manhattan, EUA",
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

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: "#00aa00",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#00aa00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  searchBarContainer: {
    backgroundColor: "#fff",
    padding: 16,
  },
  filterButton: {
    marginTop: 8,
    backgroundColor: "#00aa00",
  },
  bestMatchContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  matchHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  matchImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  matchInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  matchName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  matchSkills: {
    fontSize: 14,
    color: "#666",
  },
  investButton: {
    height: 40,
    alignSelf: "flex-end",
    marginLeft: 10,
    backgroundColor: "#00aa00",
  },
  investDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  divider: {
    marginVertical: 16,
  },
  detailsContainer: {
    marginTop: 16,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingIcon: {
    marginRight: 8,
  },
  learnMoreButton: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  learnMoreText: {
    color: "#00aa00",
    fontSize: 14,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
});

export default Cliente;

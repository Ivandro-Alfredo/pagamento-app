import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

// Componente para exibição de cada investimento
const InvestmentItem = ({ name, amount, received, onPressAnalyze }) => (
  <View style={styles.investmentItem}>
    <Text style={styles.investmentName}>{name}</Text>
    <Text style={styles.investmentAmount}>{`Investimento: ${amount}`}</Text>
    <Text style={styles.investmentReceived}>{`Já Recebido: ${received}`}</Text>
    <TouchableOpacity style={styles.analyzeButton} onPress={onPressAnalyze}>
      <Text style={styles.analyzeButtonText}>Analisar</Text>
    </TouchableOpacity>
  </View>
);

// Componente para exibição de cada destaque
const HighlightItem = ({ imageUri, title, onPress }) => (
  <TouchableOpacity style={styles.highlightItem} onPress={onPress}>
    <Image source={{ uri: imageUri }} style={styles.highlightImage} />
    <Text style={styles.highlightTitle}>{title}</Text>
  </TouchableOpacity>
);

// Componente para exibição de cada opção de investimento
const InvestOptionItem = ({ imageUri, title, onPress }) => (
  <TouchableOpacity style={styles.investOption} onPress={onPress}>
    <Image source={{ uri: imageUri }} style={styles.investOptionImage} />
    <Text style={styles.investOptionTitle}>{title}</Text>
  </TouchableOpacity>
);

// Componente principal HomeScreen
const HomeScreen = ({ navigation }) => {
  const investmentsData = [
    {
      id: "1",
      name: "Investimento 1",
      amount: "$1000.00",
      received: "$500.00",
    },
    {
      id: "2",
      name: "Investimento 2",
      amount: "$5000.00",
      received: "$2500.00",
    },
    // Adicione mais investimentos conforme necessário
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Barra Verde com Ícone de Menu */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Clique no menu")}>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>InvesteMe</Text>
        <TouchableOpacity
          onPress={() => console.log("Clique no ícone de notificação")}
        >
          <Ionicons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar investimentos"
          placeholderTextColor="#999"
        />
        <FontAwesome name="search" size={20} color="#999" />
      </View>

      {/* Banner de Destaque */}
      <Image
        source={{
          uri: "https://via.placeholder.com/600x200/00aa00/ffffff?text=InvesteMe",
        }}
        style={styles.bannerImage}
      />

      {/* Seção de Investimentos */}
      <View style={styles.investmentsSection}>
        <Text style={styles.sectionTitle}>Meus Investimentos</Text>

        {/* Investimentos Personalizados */}
        {investmentsData.map((investment) => (
          <InvestmentItem
            key={investment.id}
            name={investment.name}
            amount={investment.amount}
            received={investment.received}
            onPressAnalyze={() => console.log(`Analisar ${investment.name}`)}
          />
        ))}
      </View>

      {/* Seção de Destaques */}
      <View style={styles.highlightsSection}>
        <Text style={styles.sectionTitle}>Destaques</Text>

        {/* Destaques */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Destaque 1 */}
          <HighlightItem
            imageUri="https://via.placeholder.com/150x150/ffcc00/333333?text=Destaque+1"
            title="Destaque 1"
            onPress={() => console.log("Clique no Destaque 1")}
          />

          {/* Destaque 2 */}
          <HighlightItem
            imageUri="https://via.placeholder.com/150x150/3366cc/ffffff?text=Destaque+2"
            title="Destaque 2"
            onPress={() => console.log("Clique no Destaque 2")}
          />

          {/* Adicione mais destaques conforme necessário */}
        </ScrollView>
      </View>

      {/* Seção de Investimentos (segunda parte) */}
      <View style={styles.investSection}>
        <Text style={styles.sectionTitle}>Descubra Novos Investimentos</Text>

        {/* Opções de Investimento */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Opção 1 */}
          <InvestOptionItem
            imageUri="https://via.placeholder.com/100x100/ff6666/ffffff?text=Op%C3%A7%C3%A3o+1"
            title="Opção de Investimento 1"
            onPress={() => console.log("Clique em Opção 1")}
          />

          {/* Opção 2 */}
          <InvestOptionItem
            imageUri="https://via.placeholder.com/100x100/66cc99/ffffff?text=Op%C3%A7%C3%A3o+2"
            title="Opção de Investimento 2"
            onPress={() => console.log("Clique em Opção 2")}
          />

          {/* Adicione mais opções de investimento conforme necessário */}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  investmentsSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  investmentItem: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  investmentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  investmentAmount: {
    fontSize: 16,
    color: "#00aa00",
    marginBottom: 5,
  },
  investmentReceived: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  analyzeButton: {
    backgroundColor: "#00aa00",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  analyzeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  highlightsSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  highlightItem: {
    marginRight: 15,
  },
  highlightImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  highlightTitle: {
    fontSize: 16,
    color: "#333",
  },
  investSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  investOption: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },
  investOptionImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 10,
  },
  investOptionTitle: {
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;

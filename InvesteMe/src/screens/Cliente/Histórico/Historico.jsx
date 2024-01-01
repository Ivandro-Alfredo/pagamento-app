import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome, Octicons, AntDesign } from "@expo/vector-icons";

const HistoryScreen = () => {
  const [historyData, setHistoryData] = useState([
    {
      id: "1",
      date: "15/02/2023",
      description: "Compra no Mercado",
      amount: "-$50.00",
      status: "Pago",
    },
    {
      id: "2",
      date: "10/02/2023",
      description: "Depósito",
      amount: "+$100.00",
      status: "Pendente",
    },
    // Adicione mais itens de histórico conforme necessário
  ]);

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterType, setFilterType] = useState("status");
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef(null);

  const renderHistoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => handleTransactionPress(item)}
    >
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <Text style={styles.amountText}>{item.amount}</Text>
      <Text style={styles.statusText}>{item.status}</Text>
      <FontAwesome name="chevron-right" size={16} color="#888" />
    </TouchableOpacity>
  );

  const handleTransactionPress = (transaction) => {
    setSelectedTransaction(transaction);
    setModalVisible(true);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    setSearchTerm(""); // Limpar o termo de pesquisa ao mudar o tipo de filtro
    searchInputRef.current?.focus(); // Focar no input de pesquisa
  };

  const filteredHistory = historyData.filter((item) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    if (filterType === "status") {
      return item.status.toLowerCase().includes(lowercaseSearchTerm);
    } else if (filterType === "date") {
      return item.date.includes(searchTerm);
    } else if (filterType === "id") {
      return item.id.includes(searchTerm);
    }
    return true; // Retorna todos se nenhum filtro aplicado
  });

  return (
    <View style={styles.container}>
      {/* Nova Barra Verde com Ícone do Logo e Nome do Aplicativo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Clique na seta")}>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>InvesteMe</Text>
        <TouchableOpacity
          onPress={() => console.log("Clique no ícone de seta")}
        >
          <AntDesign name="login" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Histórico de Pagamentos</Text>

      <View style={styles.filterButtons}>
        <TouchableOpacity onPress={() => handleFilterChange("status")}>
          <Text
            style={[
              styles.filterText,
              filterType === "status" && styles.activeFilter,
            ]}
          >
            Estado
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange("date")}>
          <Text
            style={[
              styles.filterText,
              filterType === "date" && styles.activeFilter,
            ]}
          >
            Data
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange("id")}>
          <Text
            style={[
              styles.filterText,
              filterType === "id" && styles.activeFilter,
            ]}
          >
            ID
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        ref={searchInputRef}
        style={styles.searchInput}
        placeholder={`Pesquisar por ${filterType}`}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderHistoryItem}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalhes da Transação</Text>
          {selectedTransaction && (
            <>
              <Text>ID: {selectedTransaction.id}</Text>
              <Text>Data: {selectedTransaction.date}</Text>
              <Text>Estado: {selectedTransaction.status}</Text>
              <Text>Descrição: {selectedTransaction.description}</Text>
              <Text>Valor: {selectedTransaction.amount}</Text>
              {/* Adicionando uma imagem de comprovante (substitua a URL com a sua imagem) */}
              <Image
                source={{ uri: "https://via.placeholder.com/200" }}
                style={styles.receiptImage}
              />
            </>
          )}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
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
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterText: {
    fontSize: 16,
    color: "#00aa00",
  },
  activeFilter: {
    fontWeight: "bold",
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: "#666",
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
  },
  amountText: {
    fontSize: 16,
    color: "#00aa00",
  },
  statusText: {
    fontSize: 16,
    color: "#333",
  },
  receiptImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  modalCloseText: {
    fontSize: 18,
    color: "#00aa00",
    marginTop: 20,
  },
});

export default HistoryScreen;

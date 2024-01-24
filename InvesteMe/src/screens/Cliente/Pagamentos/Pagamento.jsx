import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import {Octicons, AntDesign,Ionicons} from "@expo/vector-icons";
import routes from "../../../components/routes/routes";
import { DrawerActions } from '@react-navigation/native';


const Pagamento = ({navigation}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isPaymentMethodModalVisible, setPaymentMethodModalVisible] =
    useState(false);
 
  const [paymentMethods, setPaymentMethods] = useState([
    "Cartão de Crédito",
    "Boleto",
    "Transferência",
    "NFC",
    "Código QR",
    "Pix",
    "PayPal",
    "Google Pay",
  ]);

  const openPaymentMethodModal = () => setPaymentMethodModalVisible(true);
  const closePaymentMethodModal = () => setPaymentMethodModalVisible(false);


  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
    closePaymentMethodModal();
  };


  const renderPaymentMethodItem = ({ item }) => (
    <TouchableOpacity
      style={styles.modalItem}
      onPress={() => handlePaymentMethodSelection(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const handleBackButton = () => {
    console.log("Clique no botão Voltar");
    // Adicione a lógica desejada para voltar
  };

  const handleForwardButton = () => {
    console.log("Clique no botão Avançar");
    // Adicione a lógica desejada para avançar
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>InvesteMe</Text>
        <TouchableOpacity
onPress={() => navigation.navigate(routes.INVESTIDOR)} >
        <AntDesign name="home" size={24} color="white" />
</TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.searchLabel}>Pesquise o Tipo de Pagamento</Text>


        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={openPaymentMethodModal}
          >
            <Text>
              {selectedPaymentMethod || "Selecione a forma de pagamento"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Pesquise a descrição:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a descrição desejada"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Pesquise o valor:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor desejado"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={handleBackButton}
          >
            <Ionicons name="arrow-back" size={24} color="#00aa00" />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate(routes.DADOS)}
          >
            <AntDesign name="right" size={24} color="#00aa00" />
            <Text>Avançar</Text>
          </TouchableOpacity>
        </View>
      </View>


      {isPaymentMethodModalVisible && (
        <View style={styles.modal}>
          <FlatList
            data={paymentMethods}
            renderItem={renderPaymentMethodItem}
            keyExtractor={(item) => item}
            style={styles.modalList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#00aa00",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchLabel: {
    fontSize: 16,
    margin: 10,
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00aa00",
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 5,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: "#00aa00",
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    width: "80%",
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: -50 }],
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalList: {
    maxHeight: 200,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  navigationButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00aa00",
    alignItems: "center",
  },
});

export default Pagamento;

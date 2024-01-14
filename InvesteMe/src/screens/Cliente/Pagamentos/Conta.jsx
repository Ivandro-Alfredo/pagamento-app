import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";

const Conta = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        {/* Barra Verde com Logo, Nome do Aplicativo e Ícone de Entrar na Conta */}
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

        {/* Frase "Complete seus dados de usuário" */}
        <Text style={styles.subHeaderText}>Complete os Dados do Pagamento</Text>

        {/* Inputs: Número do Cartão, Data de Validade, Código */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Número do Cartão</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o número do cartão"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Data de Validade</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a data de validade"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Digite o código</Text>
            <TextInput style={styles.input} placeholder="Digite o código" />
          </View>
        </View>

        {/* Botões: Voltar e Avançar */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="green" />
            <Text style={styles.buttonText}> Voltar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("Confirmacao")}
          >
            <Text style={styles.buttonText2}>Avançar </Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  subHeaderText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 20,
    marginLeft: 90,
    marginTop: 50,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  inputWrapper: {
    marginBottom: 10,
    marginTop: 10,
  },
  inputLabel: {
    marginBottom: 5,
    color: "#333",
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginBottom: 20,
    marginTop: 40,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#00CC47",
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00CC47",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 5,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    marginLeft: 5,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Conta;

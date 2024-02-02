import React from "react";
import { useNavigation } from '@react-navigation/native';
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
import routes from "../../../components/routes/routes";
import { DrawerActions } from '@react-navigation/native';


const Dados = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        {/* Barra Verde com Logo, Nome do Aplicativo e Ícone de Entrar na Conta */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
          {/*} <Image
            source={require("../../../../assets/logo.png")}
            style={styles.logo}
  />*/}
          <Text style={styles.headerText}>InvesteMe</Text>
          <TouchableOpacity
onPress={() => navigation.navigate(routes.INVESTIDOR)} >
        <AntDesign name="home" size={24} color="white" />
</TouchableOpacity>
        </View>

        {/* Frase "Complete seus dados de usuário" */}
        <Text style={styles.subHeaderText}>Complete seus dados de usuário</Text>

        {/* Inputs: Nome, Bilhete de Identificação, Email, Telefone */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Nome Completo *</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Bilhete de Identificação *</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu bilhete de identificação"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email *</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Telefone *</Text>
            <TextInput style={styles.input} placeholder="Digite seu telefone" />
          </View>
        </View>

        {/* Texto indicando campos obrigatórios */}
        <Text style={styles.requiredFields}>* Campos obrigatórios</Text>

        {/* Botões: Voltar e Avançar */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <AntDesign name="arrowleft" size={24} color="green" />
            <Text style={styles.buttonText}> Voltar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate(routes.CONFIRMACAO)}
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
  logo: {
    width: 30,
    height: 30,
    marginTop: 10,
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
  requiredFields: {
    color: "red",
    marginVertical: 10,
    marginLeft: 20,
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
export default Dados;

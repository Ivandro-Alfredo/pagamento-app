import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Octicons, AntDesign } from "@expo/vector-icons";
import { DrawerActions } from '@react-navigation/native';


const Confirmacao = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Nova Barra Verde com Ícone do Logo e Nome do Aplicativo */}
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

      {/* Conteúdo da Home */}
      <View style={styles.content}>
        <Text style={styles.statusText}>Pedido Concluído</Text>
        <FontAwesome name="check-circle" size={50} color="#00aa00" />

        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Recebemos o seu pedido</Text>
        </Text>
        <Text style={styles.infoText}>
          Aguarde a confirmação do pagamento. Enviaremos um e-mail com mais
          informações em breve.
        </Text>
      </View>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  statusText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00aa00",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default Confirmacao;

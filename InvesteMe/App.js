import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cadastro from "./src/screens/Cadastro/Cadastro";
import Login from "./src/screens/Login/Login";
import Pagamento from "./src/screens/Cliente/Pagamentos/Pagamento";
import Processamento from "./src/screens/Cliente/Pagamentos/Processo";
import Dados from "./src/screens/Cliente/Pagamentos/Dados";
import Conta from "./src/screens/Cliente/Pagamentos/Conta";
import Fatura from "./src/screens/Cliente/Pagamentos/Factura";
import Confirmação from "./src/screens/Cliente/Pagamentos/Confirmação";
import HistoryScreen from "./src/screens/Cliente/Histórico/Historico";
import HomeScreen from "./src/screens/Cliente/ComConta/Home";

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login/Login";
import Cadastro from "./src/screens/Cadastro/Cadastro";
import Pagamento from "./src/screens/Cliente/Pagamentos/Pagamento";
import Dados from "./src/screens/Cliente/Pagamentos/Dados";
import Conta from "./src/screens/Cliente/Pagamentos/Conta";
import Confirmacao from "./src/screens/Cliente/Pagamentos/Confirmação";
import FaturaPagamento from "./src/screens/Cliente/Pagamentos/Factura";
import Cconta from "./src/screens/Cliente/ComConta/Home";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Dados}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Conta"
        component={Conta}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Confirmacao"
        component={Confirmacao}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Fatura"
        component={Cconta}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

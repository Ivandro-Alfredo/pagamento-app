import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Share,
  Platform,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const FaturaPagamento = ({ navigation }) => {
  // Dados fictícios da fatura
  const faturaData = {
    numeroFatura: "123456789",
    dataVencimento: "15/01/2024",
    valor: "150,00",
    descricao: "Pagamento de Serviços",
    beneficiario: "Empresa XYZ",
  };

  const handlePrint = () => {
    // Lógica para imprimir a fatura
    // Implemente a lógica de impressão aqui
    console.log("Imprimir fatura");
  };

  const handleShare = async () => {
    try {
      const shareOptions = {
        message: `Número da Fatura: ${faturaData.numeroFatura}\nData de Vencimento: ${faturaData.dataVencimento}\nValor: KZ ${faturaData.valor}\nDescrição: ${faturaData.descricao}\nBeneficiário: ${faturaData.beneficiario}`,
      };

      const result = await Share.share(shareOptions);

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Barra Verde com Ícone de Voltar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Fatura Container */}
      <View style={styles.faturaContainer}>
        {/* Cabeçalho */}
        <View style={styles.faturaHeader}>
          <Text style={styles.headerText}>FATURA</Text>
        </View>

        {/* Detalhes da Fatura */}
        <View style={styles.faturaDetails}>
          <Text style={styles.label}>Número da Fatura</Text>
          <Text style={styles.value}>{faturaData.numeroFatura}</Text>

          <Text style={styles.label}>Data de Vencimento</Text>
          <Text style={styles.value}>{faturaData.dataVencimento}</Text>

          <Text style={styles.label}>Valor</Text>
          <Text style={styles.value}>{`KZ ${faturaData.valor}`}</Text>

          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.value}>{faturaData.descricao}</Text>

          <Text style={styles.label}>Beneficiário</Text>
          <Text style={styles.value}>{faturaData.beneficiario}</Text>
        </View>
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrint}>
          <FontAwesome name="print" size={24} color="#333" />
          <Text style={styles.buttonText}>Imprimir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <FontAwesome name="share" size={24} color="#333" />
          <Text style={styles.buttonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#00aa00",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  faturaContainer: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  faturaHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  faturaDetails: {
    marginTop: 10,
  },
  label: {
    color: "#555",
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 15,
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#333",
  },
});

export default FaturaPagamento;

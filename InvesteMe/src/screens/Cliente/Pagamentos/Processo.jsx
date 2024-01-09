import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Processo = ({ navigation }) => {
  const [couponCode, setCouponCode] = useState("");
  const [couponValidationMessage, setCouponValidationMessage] = useState("");
  const [paymentState, setPaymentState] = useState("Em Processo");
  const [paymentMethod, setPaymentMethod] = useState("Cartão de Crédito");
  const [totalAmount, setTotalAmount] = useState(856.3);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);

  const handleApplyCoupon = () => {
    // Lógica para validar o cupom (simulação)
    if (couponCode === "DESCONTO10") {
      setCouponValidationMessage(
        "Cupom aplicado com sucesso! Desconto de 10% aplicado."
      );
    } else {
      setCouponValidationMessage("Cupom inválido. Tente novamente.");
    }
  };

  const fadeIn = new Animated.Value(0);

  Animated.timing(fadeIn, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Nome do Seu App</Text>
      </View>

      <Text style={styles.title}>Bem-vindo ao Seu App</Text>

      <Animated.View style={[styles.paymentStatus, { opacity: fadeIn }]}>
        <FontAwesome5 name="hourglass-half" size={50} color="#ff9900" />
        <Text style={styles.statusText}>Processo de Pagamento</Text>
      </Animated.View>

      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfoRow}>
          <Text style={styles.paymentInfoLabel}>Estado do Pagamento:</Text>
          <Text style={styles.paymentInfoText}>{paymentState}</Text>
        </View>
        <View style={styles.paymentInfoRow}>
          <Text style={styles.paymentInfoLabel}>Forma de Pagamento:</Text>
          <Text style={styles.paymentInfoText}>{paymentMethod}</Text>
        </View>
        <View style={styles.paymentInfoRow}>
          <Text style={styles.paymentInfoLabel}>Total:</Text>
          <Text style={styles.paymentInfoText}>
            R$ {totalAmount.toFixed(2)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.couponButton,
          showCouponInput && styles.couponButtonActive,
        ]}
        onPress={() => setShowCouponInput(!showCouponInput)}
      >
        <Text style={styles.couponButtonText}>Inserir Cupom</Text>
      </TouchableOpacity>

      {showCouponInput && (
        <View>
          {/* Input para inserir cupom */}
          <TextInput
            style={styles.couponInput}
            placeholder="Insira seu cupom"
            value={couponCode}
            onChangeText={(text) => setCouponCode(text)}
          />

          {/* Mensagem de validação do cupom */}
          {couponValidationMessage !== "" && (
            <View style={styles.couponValidationContainer}>
              <Text style={styles.couponValidationText}>
                {couponValidationMessage}
              </Text>
            </View>
          )}
        </View>
      )}

      {feedbackMessage !== "" && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>{feedbackMessage}</Text>
        </View>
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.purpleButton]}
          onPress={() => navigation.navigate("PaymentVerification")}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  paymentStatus: {
    alignItems: "center",
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff9900",
  },
  paymentContainer: {
    backgroundColor: "#800080",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  paymentInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  paymentInfoLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentInfoText: {
    color: "#fff",
    fontSize: 16,
  },
  couponButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#800080",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  couponButtonActive: {
    backgroundColor: "#800080",
  },
  couponButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#800080",
    textAlign: "center",
  },
  couponInput: {
    borderWidth: 1,
    borderColor: "#800080",
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  couponValidationContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#800080",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  couponValidationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#800080",
    textAlign: "center",
  },
  feedbackContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#800080",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#800080",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#555",
  },
  purpleButton: {
    backgroundColor: "#800080",
    borderWidth: 1,
    borderColor: "#800080",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Processo;

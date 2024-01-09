import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isAreaModalVisible, setAreaModalVisible] = useState(false);
  const [isPaymentMethodModalVisible, setPaymentMethodModalVisible] = useState(false);
  const [areas, setAreas] = useState(['Área 1', 'Área 2', 'Área 3']);
  const [paymentMethods, setPaymentMethods] = useState(['Cartão de Crédito', 'Boleto', 'Transferência']);

  const openAreaModal = () => setAreaModalVisible(true);
  const closeAreaModal = () => setAreaModalVisible(false);
  const openPaymentMethodModal = () => setPaymentMethodModalVisible(true);
  const closePaymentMethodModal = () => setPaymentMethodModalVisible(false);

  const handleAreaSelection = (area) => {
    setSelectedArea(area);
    closeAreaModal();
  };

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
    closePaymentMethodModal();
  };

  const renderAreaItem = ({ item }) => (
    <TouchableOpacity style={styles.modalItem} onPress={() => handleAreaSelection(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderPaymentMethodItem = ({ item }) => (
    <TouchableOpacity style={styles.modalItem} onPress={() => handlePaymentMethodSelection(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Barra verde com logo, nome do aplicativo e ícone de seta */}
      <View style={styles.header}>
        {/* Substitua 'seu_logo.png' pelo caminho ou URI do seu logo */}
        <Image source={require('../../../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Nome do Seu App</Text>
        <TouchableOpacity onPress={() => console.log('Clique no ícone de seta')}>
          <Icon name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Centralizar o restante do conteúdo */}
      <View style={styles.content}>
        <Text style={styles.searchLabel}>Pesquise o Tipo de Pagamento</Text>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.selectButton} onPress={openAreaModal}>
            <Text>{selectedArea || 'Selecione a área'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.selectButton} onPress={openPaymentMethodModal}>
            <Text>{selectedPaymentMethod || 'Selecione a forma de pagamento'}</Text>
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
      </View>

      {/* Lista de Áreas */}
      {isAreaModalVisible && (
        <View style={styles.modal}>
          <FlatList
            data={areas}
            renderItem={renderAreaItem}
            keyExtractor={(item) => item}
            style={styles.modalList}
          />
        </View>
      )}

      {/* Lista de Formas de Pagamento */}
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
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00aa00',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 30, // Ajuste o tamanho do logo conforme necessário
    height: 30, // Ajuste o tamanho do logo conforme necessário
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto', // Empurra o ícone de seta para a direita
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchLabel: {
    fontSize: 16,
    margin: 10,
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%', // Ajuste a largura conforme necessário
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00aa00',
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    borderRadius: 5,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: '#00aa00',
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    top: '50%', // Posiciona o topo do modal no meio da tela
    transform: [{ translateY: -50 }], // Centraliza verticalmente
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, // Sombreamento (Android)
    shadowColor: '#000', // Sombreamento (iOS)
    shadowOffset: { width: 0, height: 2 }, // Sombreamento (iOS)
    shadowOpacity: 0.25, // Sombreamento (iOS)
    shadowRadius: 3.84, // Sombreamento (iOS)
  },
  modalList: {
    maxHeight: 200,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeScreen;

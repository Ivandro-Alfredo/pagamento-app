import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import routes from '../routes/routes';
import { styles } from '../../style/menu/menuStyle';

function MenuBuger() {
  const navigation = useNavigation();
  const [isDriver, setIsDriver] = useState(false); // Inicialmente, é um cliente

  const toggleRole = () => {
    setIsDriver((prevIsDriver) => !prevIsDriver);
  };

  const navigateToScreen = (screen) => {
    navigation.navigate(screen, { isDriver }); // Passa o estado de ser motorista ou cliente para a próxima tela
  };

  return (
    <View style={styles.Container}>
      <View>
        <Feather
          name="x"
          size={40}
          color="black"
          style={{ marginLeft: 211, marginTop: 12, marginBottom: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigateToScreen(routes.LOGIN)}
      >
        <View>
          <Ionicons
            name={isDriver ? "car" : "person-circle-outline"}
            size={55}
            color={isDriver ? 'blue' : 'black'}
            style={styles.Login}
          />
        </View>

        <Text style={styles.Login.textLogin}>{isDriver ? 'Motorista' : 'Cliente'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen(routes.PERFIL)}>
        <AntDesign name="user" size={24} color="black" style={styles.sobre} />
        <Text style={styles.sobre.textSobre}> Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen(routes.HISTORICO)}>
        <AntDesign name="book" size={24} color="black" style={styles.sobre} />
        <Text style={styles.sobre.textSobre}> Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen(routes.SOBRE_NOS)}>
        <FontAwesome
          name="group"
          size={24}
          color="black"
          style={styles.sobre}
        />
        <Text style={styles.sobre.textSobre}> Sobre Nós</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleRole} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isDriver ? 'Trocar para Cliente' : 'Trocar para Motorista'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MenuBuger;

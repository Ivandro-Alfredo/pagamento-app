import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { styles } from "../../style/header/header";
import routes from "./../../components/routes/routes";

// vefica se estiver a receber o statusbar é porque está no Android se não esta no IOS
const altura = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 60;

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
        </TouchableOpacity>
        <Text style={styles.headerText}>InvesteMe</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
          <AntDesign name="login" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

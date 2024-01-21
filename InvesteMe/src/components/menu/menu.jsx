import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import routes from '../routes/routes';
import { styles } from '../../style/menu/menuStyle'

function MenuBuger() {
    const navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <View>
                <Feather
                    name="x"
                    size={40}
                    color="black"
                    style={{ marginLeft: 211, marginTop: 12, marginBottom: 30 }}
                    onPress={() =>
                        navigation.dispatch(DrawerActions.closeDrawer())
                    }
                />
            </View>

            <View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate(routes.LOGIN)}
                >
                    <View>
                        <Ionicons
                            name="person-circle-outline"
                            size={55}
                            color="black"
                            style={styles.Login}
                        />
                    </View>

                    <Text style={styles.Login.textLogin}> Login</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                <TouchableOpacity>
                    <FontAwesome
                        name="group"
                        size={24}
                        color="black"
                        style={styles.sobre}
                    />
                    <Text style={styles.sobre.textSobre}> Sobre Nós</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MenuBuger;

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

function HomeMenu() {
    const navigation = useNavigation();
    return (
        <View style={css.Container}>
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
                            style={css.Login}
                        />
                    </View>

                    <Text style={css.Login.textLogin}> Login</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate(routes.REGISTAR)}
                >
                    <FontAwesome5
                        name="coins"
                        size={19}
                        color="black"
                        style={css.categoria}
                    />
                    <Text style={css.categoria.textCotegoria}>Registar - se</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                <TouchableOpacity>
                    <FontAwesome
                        name="group"
                        size={24}
                        color="black"
                        style={css.sobre}
                    />
                    <Text style={css.sobre.textSobre}> Sobre Nós</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    Container: {
        paddingBottom: 10,
        marginTop: 5,
    },
    Login: {
        marginTop: -40,
        marginBottom: 15,
        textLogin: {
            marginTop: -48.6,
            marginLeft: 55,
            fontSize: 20,
            marginBottom: 18.3,
        },
    },
    bank: {
        marginTop: -5,
        marginLeft: 15,
        textConta: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 20,
            marginBottom: 14,
        },
    },
    categoria: {
        marginTop: -5,
        marginLeft: 15,
        textCotegoria: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    cartao: {
        marginTop: -5,
        marginLeft: 13,
        textCortao: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    grafico: {
        marginTop: -5,
        marginLeft: 17,
        textGrafico: {
            marginTop: -25,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    desempenho: {
        marginTop: -5,
        marginLeft: 15,
        textDesempenho: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    calendario: {
        marginTop: -5,
        marginLeft: 15,
        textCalendario: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    educacao: {
        marginTop: -5,
        marginLeft: 15,
        textEducacao: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    balanco: {
        marginTop: -5,
        marginLeft: 15,
        textBalanco: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
    sobre: {
        marginTop: -5,
        marginLeft: 15,
        textSobre: {
            marginTop: -22,
            marginLeft: 42,
            fontSize: 18,
            marginBottom: 14,
        },
    },
});

export default HomeMenu;

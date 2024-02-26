import React, {useEffect}from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../style/home/homeStyle";
import Header from "../../components/headers/header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from "expo-av";

export const PublicScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, padding: Platform.OS === "ios" }}
        stickyHeaderIndices={[0]}
      >
        {/* Barra Verde com Ícone de Menu */}
        <Header />
        <View style={styles.presentationView}>
          <Text style={styles.TextApresetation}>
            Crie, acelere, gerencie e escale com a{" "}
            <Text style={styles.TextInveste}>Investe</Text>
            <Text style={styles.TextMe}>Me</Text>
          </Text>
          <View style={styles.textoFoco}>
            <Text style={styles.textoFoco.texto}>
              Seu foco é no conteúdo e na estratégia.
            </Text>
            <Text style={styles.textoFoco.texto}>
              O nosso é fazer você vender e ganhar mais
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.textoIntro}>Veja como fazer seus pagamentos</Text>
          <View style={styles.imagemTutorial}>
            <Video
              source={require("../../../assets/video.mp4")}
              style={styles.imagemTutorial.imagem}
              useNativeControls={true}
              shouldPlay={true}
              isMuted={true}
              resizeMode="contain" //
              isLooping={true}
            />
          </View>
        </View>

        <View>
          <LinearGradient
            colors={["#15CB54", "#7B61FF"]}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {/* Adicione o conteúdo que você deseja dentro do LinearGradient */}
            <Text style={styles.gradientView.texto}>Como funciona</Text>
            <View style={styles.gradientView}>
              <Text style={styles.gradientView.queroInvestirTexto}>
                1- Quero Investir
              </Text>
              <View style={styles.box}>
                <Text style={styles.gradientView.investir}>
                  Selecione o projecto: Consulte os valores e fale com o
                  financiado.
                </Text>
              </View>
            </View>
            <View style={styles.gradientView}>
              <Text style={styles.gradientView.financiado}>
                2 - Quero ser financiado
              </Text>
              <Text style={styles.gradientView.financiador}>
                Selecione em quantos projectos deseja colocar na plataforma.
              </Text>
            </View>
            <View style={styles.gradientView}>
              <Text style={styles.gradientView.pagamento}>
                3- Apenas quero fazer pagamentos
              </Text>
              <Text style={styles.gradientView.pagar}>
                Após o pagamento será emitido um comprovante .
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.showImage}>
          <Text style={styles.showImage.texto}>
            Plataforma escolhida por milhares de Investidores
          </Text>
          <View>
            <Image
              source={require("../../../assets/imagem2.jpg")}
              style={styles.showImage.imagem1}
            />
          </View>
          <View>
            <Image
              source={require("../../../assets/imagem4.jpg")}
              style={styles.showImage.imagem2}
            />
          </View>
          <View>
            <Image
              source={require("../../../assets/imagem3.jpg")}
              style={styles.showImage.imagem3}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

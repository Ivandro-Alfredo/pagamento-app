import React, { useState,useRef } from 'react';
import {
	View,
	Text,
	Button,
	Image,
	ScrollView,
	TextInput,
	Platform, 
	SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importe o hook de navegação

import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../style/home/homeStyle';
import Header from '../../components/headers/header';
/* import Video from 'react-native-video'; */
import { Video } from 'expo-av';
import routes from '../../components/routes/routes';



export const PublicScreen = () => {
	const [selectedArea, setSelectedArea] = useState('');
	const [minValue, setMinValue] = useState('');
	const [maxValue, setMaxValue] = useState('');
	const [email, setEmail] = useState('');

	const navigation = useNavigation();


	return (

		<View style={styles.container}>
			<ScrollView style={{ flex: 1 ,
			padding: Platform.OS === 'ios'}}stickyHeaderIndices={[0]}>
				{/* Barra Verde com Ícone de Menu */}
				<Header />
				<View style={styles.presentationView}>
					<Text style={styles.TextApresetation}>
						Crie, acelere, gerencie e escale com a{' '}
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

				<View style={styles.formsContainer}>
					<Text>Escolha uma área e preencha os campos abaixo</Text>

					{/* Adicione o componente Picker aqui */}
					<View style={styles.pickerContainer}>
						<Picker
							selectedValue={selectedArea}
							onValueChange={(itemValue) =>
								setSelectedArea(itemValue)
							}
							style={styles.picker}>
							<Picker.Item label='Selecione aqui' value='Selecione' />
							<Picker.Item label='Área 2' value='area2' />
							<Picker.Item label='Área 3' value='area3' />
						</Picker>
					</View>

					<View style={styles.forms}>
						{/* Aqui coloca um select */}
						<View style={styles.inputRow}>
							<Text style={styles.label}>Valor mínimo</Text>
							<Text style={styles.label}>Valor máximo</Text>
						</View>

						<View style={styles.inputRow}>
							<TextInput
								style={styles.numericInput}
								placeholder='Digite aqui'
								keyboardType='numeric'
							/>
							<TextInput
								style={styles.numericInput}
								placeholder='Digite aqui'
								keyboardType='numeric'
							/>
						</View>

						<Text style={styles.label}>Email</Text>
						<TextInput
							style={styles.input}
							placeholder='Digite aqui'
						/>
						<View style={styles.continueButtonContainer}>
							<Button
								title='Continuar'
								onPress={() => navigation.navigate(routes.LOGIN)}
								color={'#00CC47'}
							/>
						</View>
					</View>
				</View>

				<View>
					<Text style={styles.textoIntro}>
						Veja como fazer seus pagamentos
					</Text>
					<View style={styles.imagemTutorial}>



					<Video
      source={require('../../../assets/video.mp4')}
      style={{ width: 300, height: 200 }}
      useNativeControls={true}
    />

					{/*<Video
  source={require('../../../assets/mixkit-casual-business-meeting-of-entrepreneurs-33035-medium.mp4')} // Substitua o caminho pelo seu vídeo
  controls={true} // Adicione esta linha se deseja exibir controles de reprodução
  resizeMode="contain" // Ajuste conforme necessário
						/>*/}


						{/* Adicione um componente de vídeo rodar 'npm install react-native-video'
						 */}
						{/* <Video
				source={{ uri: 'URL_DO_SEU_VIDEO' }} // Substitua pela URL do seu vídeo
				style={{ width: 300, height: 200 }}
				controls={true}
			/> */}
					</View>
				</View>

				<View>
					<LinearGradient
						colors={['#15CB54', '#7B61FF']}
						style={styles.linearGradient}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}>
						{/* Adicione o conteúdo que você deseja dentro do LinearGradient */}
						<Text style={styles.gradientView.texto}>
							Como funciona
						</Text>
						<View style={styles.gradientView}>
							<Text
								style={styles.gradientView.queroInvestirTexto}>
								1- Quero Investir
							</Text>
							<View>
								<Text style={styles.gradientView.investir}>
									Selecione o projecto: Consulte os valores e
									fale com o financiado.
								</Text>
							</View>
						</View>
						<View style={styles.gradientView}>
							<Text style={styles.gradientView.financiado}>
								2 - Quero ser financiado
							</Text>
							<Text style={styles.gradientView.financiador}>
								Selecione em quantos projectos deseja colocar na
								plataforma.
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
							source={require('../../../assets/imagem2.jpg')}
							style={styles.showImage.imagem1}
						/>
					</View>
					<View>
						<Image
							source={require('../../../assets/imagem4.jpg')}
							style={styles.showImage.imagem2}
						/>
					</View>
					<View>
						<Image
							source={require('../../../assets/imagem3.jpg')}
							style={styles.showImage.imagem3}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuBuger from '../menu/menu';
import InvestidorMenu from '../menu/homeMenu';
import { PublicScreen } from '../../screens/home/home';
import Cadastro from '../../screens/Cadastro/Cadastro';
import Login from '../../screens/Login/Login';
import Pagamento from '../../screens/Cliente/Pagamentos/Pagamento';
import Dados from '../../screens/Cliente/Pagamentos/Dados';
import Conta from '../../screens/Cliente/Pagamentos/Conta';
import HistoryScreen from '../../screens/Cliente/Histórico/Historico';
import routes from '../routes/routes';
import Cliente from '../../screens/Cliente/Cliente';
import Investidor from '../../screens/Investidor/Investidor';
import Confirmacao from '../../screens/Cliente/Pagamentos/Confirmação';

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
	const [isInvestidor, setIsInvestidor] = useState(false);
	const toggleInvestidor = () => {
		setIsInvestidor(!isInvestidor);
	};

	return (
		<Drawer.Navigator
			drawerContent={(props) =>
				isInvestidor ? (
					<InvestidorMenu
						{...props}
						setIsInvestidor={toggleInvestidor} isInvestidor={isInvestidor}
					/>
				) : (
					<MenuBuger {...props} setIsInvestidor={toggleInvestidor} isInvestidor={isInvestidor}/>
				)
			}
			screenOptions={{
				headerTintColor: 'white',
				swipeEnabled: false,
				headerShown: false,
				drawerType: 'slide',
				defaultNavigationOptions: {
					gestureEnabled: false,
				},
				//estilo dos itens dentro do menu
				drawerLabelStyle: {
					marginLeft: 1,
				},
				//
				headerStyle: {
					backgroundColor: 'black',
				},
				//drawerHideStatusBarOnOpen: true,
				overlayColor: '#00aa00',
				drawerStyle: {
					width: 270,
				},
			}}
			initialRouteName={routes.LOGIN}>
				
			{isInvestidor ? (
				<Drawer.Screen
					name={routes.INVESTIDOR}
					component={Investidor}
				/>
				
			) : (
				<Drawer.Screen name={routes.PUBLIC} component={PublicScreen} />
			)}

			<Drawer.Screen name={routes.LOGIN} component={Login} />

			<Drawer.Screen name={routes.REGISTAR} component={Cadastro} />

			<Drawer.Screen name={routes.CONTA} component={Conta} />

			<Drawer.Screen name={routes.PAGAMENTO} component={Pagamento} />

			<Drawer.Screen name={routes.DADOS} component={Dados} />

			<Drawer.Screen name={routes.CLIENTE} component={Cliente} />

			<Drawer.Screen name={routes.CONFIRMACAO} component={Confirmacao} />

			<Drawer.Screen name={routes.HISTORICO} component={HistoryScreen} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;

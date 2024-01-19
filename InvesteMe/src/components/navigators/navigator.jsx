import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../routes/routes';
import DrawerNavigator from './drawerNavigator';

const Stack = createStackNavigator();

export default StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen
				name={routes.DRAWER}
				component={DrawerNavigator}
				screenOptions={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

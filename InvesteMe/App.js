import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavavigator}  from './src/components/navigators/navigator'

export default function App() {
  return (
      <NavigationContainer>
          <StackNavavigator/>
      </NavigationContainer>
  );
}
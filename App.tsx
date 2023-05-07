import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import Demo from './src/screens/Demo';
import { getPixelSizeForLayoutSize } from 'nativewind';
import Paywall from './src/screens/Paywall';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Demo" component={Demo} options={{ headerShown: false }} />
        <Stack.Screen name="Paywall" component={Paywall} options={{ headerShown: false, presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



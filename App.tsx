import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

import { NativeBaseProvider } from 'native-base';

import { Loading } from './src/components/Loading';
import { THEME } from './src/styles/theme';
import Routes from './src/routes';
import { Register } from './src/screens/Register';
import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Splash } from './src/screens/Splash';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      { fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
    
  );
}

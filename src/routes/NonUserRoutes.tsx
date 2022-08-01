import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash";
import { SplashTwo } from "../screens/SplashTwo";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function NonUserRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="splash" component={Splash} />
      <Screen name="splashtwo" component={SplashTwo} />
      <Screen name="signin" component={SignIn} />
    </Navigator>
  );
}

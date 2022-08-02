import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { Loading } from "../components/Loading";
import { UserRoutes } from "./UserRoutes";
import { NonUserRoutes } from "./NonUserRoutes";

function Routes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response);
      setLoading(false);
    });

    return subscriber;
    
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <UserRoutes /> : <NonUserRoutes />}
    </NavigationContainer>
  );
}

export default Routes;

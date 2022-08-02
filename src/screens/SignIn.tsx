import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Input,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { SignInWithSocial } from "../components/SignInWithSocial";

import AppleSvg from "../assets/apple.svg";
import GoogleSvg from "../assets/google.svg";
import auth from "@react-native-firebase/auth";

import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Alert } from "react-native";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Sign In", "Both fields are required!");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        if (error.code === "auth/invalid-email") {
          return Alert.alert("Entrar", "E-mail inválido.");
        }

        if (error.code === "auth/wrong-password") {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }

        if (error.code === "auth/user-not-found") {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }

        return Alert.alert("Entrar", "Não foi possível acessar.");
      });
  }

  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      px={5}
      bg="header.100"
      w="full"
      flex={1}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Heading
        fontSize="3xl"
        fontWeight={600}
        color="white"
        letterSpacing="md"
        mb={6}
        textAlign="center"
      >
        Get a job in the area {`\n`}
        that you always wanted!
      </Heading>
      <Text
        color="white"
        fontWeight={500}
        fontSize="sm"
        letterSpacing="xs"
        textAlign="center"
      >
        Need help to find a job? {`\n`}
        You're few clicks to find a new job!{`\n`}
        Get in action.
      </Text>

      <Box>
        <Input
          placeholder="Email"
          placeholderTextColor="gray.100"
          w="full"
          h={16}
          mt={10}
          bg="gray.300"
          alignItems="center"
          leftElement={
            <Icon
              color="gray.100"
              ml={5}
              as={<FontAwesome name="envelope-o" size={24} />}
            />
          }
          _focus={{
            bg: "gray.300",
          }}
          autoCapitalize={"none"}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Password"
          placeholderTextColor="gray.100"
          w="full"
          h={16}
          bg="gray.300"
          mt={5}
          alignItems="center"
          leftElement={
            <Icon
              color="gray.100"
              ml={5}
              as={<FontAwesome name="lock" size={24} color="black" />}
            />
          }
          _focus={{
            bg: "gray.300",
          }}
          autoCapitalize={"none"}
          secureTextEntry
          onChangeText={setPassword}
        />
      </Box>

      <Button
        w="full"
        bg="green.300"
        mt={5}
        h={16}
        _text={{
          fontWeight: 500,
        }}
        onPress={handleSignIn}
      >
        Sign In
      </Button>

      <VStack mt={10}>
        <Text color="white" fontWeight={400} fontSize="xs">
          Or sign in using social
        </Text>
      </VStack>
      <HStack w="full" mt={3} space={5}>
        <SignInWithSocial svg={GoogleSvg} onPress={() => {}} flexGrow={1} />

        <SignInWithSocial svg={AppleSvg} onPress={() => {}} flexGrow={1} />
      </HStack>
    </VStack>
  );
}

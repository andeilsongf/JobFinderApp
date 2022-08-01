import { Heading, Image, StatusBar, Text, VStack } from "native-base";

import { Button } from "../components/Button";

import SplashOne from "../assets/splash_one.svg";
import { useNavigation } from "@react-navigation/native";

export function Splash() {

  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate("splashtwo");
  }

  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <VStack flex={1} p={5} justifyContent="center">
        
        <SplashOne
        height="250"
        />

        <Heading
          fontWeight={500}
          fontSize="3xl"
          color="primary.100"
          letterSpacing="md"
          mb={5}
          mt={8}
        >
          Get the Job {`\n`}
          That you Dream
        </Heading>

        <Text color="gray.200" letterSpacing="md" fontSize="sm" lineHeight="30">
          Instant access to search millions of job {`\n`}
          postings at any time and apply {`\n`}
          through the app.
        </Text>
      </VStack>

      <VStack p={5}>
        <Button
          title="Get in"
          onPress={handleNavigation}
          />
      </VStack>
    </>
  );
}

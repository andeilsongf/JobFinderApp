import { useNavigation } from "@react-navigation/native";
import { Heading, HStack, Text, VStack, Button, StatusBar } from "native-base";

import SplashTwoSvg from "../assets/splash_two.svg";

export function SplashTwo() {

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("signin")
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <VStack flex={1} justifyContent="center" bg="white" p={5}>
        <Heading
          fontSize="3xl"
          fontWeight={500}
          letterSpacing="md"
          color="primary.100"
          mb="10"
          lineHeight="40"
        >
          Find A Perfect {`\n`}
          Job Match.
        </Heading>

        <Text
          fontSize="sm"
          fontWeight={500}
          letterSpacing="xs"
          color="gray.200"
          mb="30"
        >
          Instant access to search millions of job{`\n`}
          postings at any time and apply through{`\n`}
          the app.
        </Text>

        <HStack justifyContent="space-between" alignItems="center">
          <HStack flexDirection="column">
            <VStack mb="55">
              <Heading
                fontSize="2xl"
                fontWeight={500}
                letterSpacing="md"
                color="primary.100"
                mb={1}
              >
                100+
              </Heading>
              <Text
                fontSize="sm"
                fontWeight={500}
                letterSpacing="md"
                color="gray.200"
              >
                Recruiters.
              </Text>
            </VStack>

            <VStack mb="55">
              <Heading
                fontSize="2xl"
                fontWeight={500}
                letterSpacing="md"
                color="primary.100"
                mb={1}
              >
                Fast Contact
              </Heading>
              <Text
                fontSize="sm"
                fontWeight={500}
                letterSpacing="md"
                color="gray.200"
              >
                Get in touch directly {`\n`}
                with recruiters.
              </Text>
            </VStack>

            <VStack>
              <Heading
                fontSize="2xl"
                fontWeight={500}
                letterSpacing="md"
                color="primary.100"
                mb={1}
              >
                50
              </Heading>
              <Text
                fontSize="sm"
                fontWeight={500}
                letterSpacing="md"
                color="gray.200"
              >
                Happy customers.
              </Text>
            </VStack>
          </HStack>

          <SplashTwoSvg
            height="100%"
          />
        </HStack>
      </VStack>

      <HStack space={5} p={5} mb={4} bg="white">
        <Button
          variant="outline"
          bg="green.200"
          flexGrow={1}
          _text={{
            color: "white",
          }}
          _pressed={{
            bg: "green.300",
          }}
          onPress={handleHome}
        >
          Sign In
        </Button>
      </HStack>
    </>
  );
}

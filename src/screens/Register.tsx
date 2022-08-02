import {
  VStack,
  Text,
  Heading,
  Box,
  Button,
  Input,
  StatusBar,
  Select,
  ScrollView,
  HStack,
} from "native-base";
import { useState } from "react";

import { Header } from "../components/Header";

import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Register() {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [requirements, setRequirements] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsApp] = useState("");

  const navigation = useNavigation();

  function handleJobRegister() {
    if (!company || !title || !type || !requirements) {
      return Alert.alert("Register", "Please fill and the fields");
    }

    firestore()
      .collection("jobs")
      .add({
        company,
        title,
        type,
        requirements,
        description,
        email,
        whatsapp,
        created_at: firestore.FieldValue.serverTimestamp(),
      })

      .then(() => {
        Alert.alert("Register", "Job registered. Redirecting");
        navigation.goBack();
      })

      .catch((error) => {
        console.log(error);
        Alert.alert("Register", "Error! Not possible to register job.");
      });
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Header title="Register" isEnable={false} />
      <VStack
        flex={1}
        mt={-10}
        pt={8}
        px="22"
        rounded="30"
        bg="white"
        overflow="hidden"
        pb={5}
      >
        <Box
          style={{
            shadowColor: "rgba(64, 64, 64, .16)",
            shadowOpacity: 0.6,
            shadowRadius: 10,
            shadowOffset: {
              width: 1,
              height: 1,
            },
          }}
          mb={4}
        ></Box>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingBottom: 100,
          }}
        >
          <VStack alignItems="center">
            <Heading fontWeight={500} fontSize="lg" mb="2" color="primary.100">
              Information
            </Heading>
          </VStack>

          <VStack mt="28">
            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              Company
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              fontSize="xs"
              h={10}
              textAlignVertical="top"
              mb={6}
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
              onChangeText={setCompany}
            />

            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              Title
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              fontSize="xs"
              textAlignVertical="top"
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
              onChangeText={setTitle}
            />

            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
              mt={6}
            >
              Description
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              multiline={true}
              h={20}
              fontSize="xs"
              textAlignVertical="top"
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
              onChangeText={setDescription}
            />
          </VStack>
          <VStack mt="28">
            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              Type
            </Text>

            <Select
              selectedValue={type}
              minWidth="200"
              accessibilityLabel="Choose Type"
              placeholder="Choose Type"
              mt={1}
              onValueChange={(item) => setType(item)}
            >
              <Select.Item label="Remote" value="Remote" />
              <Select.Item label="Presential" value="Presential" />
            </Select>
          </VStack>

          <VStack mt="28" flex={1}>
            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              Requirements
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              h={32}
              fontSize="xs"
              multiline={true}
              textAlignVertical="top"
              flexGrow={1}
              mb={5}
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
              onChangeText={setRequirements}
            />
          </VStack>

          <VStack flexGrow={1}>
            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              Email
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              h={16}
              fontSize="xs"
              multiline={true}
              textAlignVertical="top"
              flexGrow={1}
              mb={10}
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
              onChangeText={setEmail}
            />
          </VStack>

          <VStack flexGrow={1}>
            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              WhatsApp
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              h={16}
              fontSize="xs"
              multiline={true}
              textAlignVertical="top"
              flexGrow={1}
              mb={10}
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
              onChangeText={setWhatsApp}
            />
          </VStack>
        </ScrollView>
      </VStack>
      <VStack space={5} bg="white" w="full" px="22" pb={6}>
        <Button
          variant="outline"
          borderColor="green.300"
          bg="green.300"
          flexGrow={1}
          _text={{
            color: "white",
            fontWeight: 600,
          }}
          _pressed={{
            bg: "header.100",
          }}
          onPress={handleJobRegister}
        >
          Register now
        </Button>
      </VStack>
    </>
  );
}

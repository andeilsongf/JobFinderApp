import { Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Text,
  Image,
  Heading,
  Box,
  Button,
  Input,
  StatusBar,
  Select,
  ScrollView,
} from "native-base";
import { useState } from "react";

import { Header } from "../components/Header";

export function Register() {
  let [category, setCategory] = useState("");

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
            />

            <Text
              fontWeight={500}
              color="primary.100"
              letterSpacing="xs"
              mb={2}
            >
              Overview
            </Text>

            <Input
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              fontSize="xs"
              h={20}
              multiline={true}
              textAlignVertical="top"
              _focus={{
                borderColor: "gray.300",
                bg: "white",
              }}
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
              selectedValue={category}
              minWidth="200"
              accessibilityLabel="Choose Type"
              placeholder="Choose Type"
              mt={1}
              onValueChange={(item) => setCategory(item)}
            >
              <Select.Item label="Remote" value="remote" />
              <Select.Item label="Full Time" value="full-time" />
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
        >
          Register now
        </Button>
      </VStack>
    </>
  );
}

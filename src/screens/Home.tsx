import {
  Button,
  Heading,
  HStack,
  Icon,
  Input,
  StatusBar,
  Text,
  useTheme,
  VStack,
  FlatList,
  Center,
  Box,
} from "native-base";

import * as Location from "expo-location";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { Category } from "../components/Category";
import { Job, JobProps } from "../components/Job";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Loading } from "../components/Loading";

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<"Remote" | "Presential">("Remote");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Wait, we are fetching you location..."
  );

  function handleJobDetails(jobId: string) {
    navigation.navigate("details", {
      jobId,
    });
  }

  function registerJob() {
    navigation.navigate("register");
  }

  function handleLogout() {
    auth()
      .signOut()
      .catch((error) => {
        console.log(error);
        return Alert.alert(
          "Logout",
          "It was not possible to sign out. Try again."
        );
      });
  }

  useEffect(() => {
    GetCurrentLocation();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection("jobs")
      .where("type", "==", category)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { company, title, type } = doc.data();
          return {
            id: doc.id,
            title,
            company,
            type,
          };
        });

        setJobs(data);
      });

    return subscriber;
  }, [category]);

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Location",
        "Allow us to use your location for better service?",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync({});

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.city}, ${item.country}`;

        setDisplayCurrentAddress(address);
      }
    }
  };

  const searchFilter = (text: string) => {
    if (text) {
      const filteredData = jobs.filter((job) => {
        const itemData = job.title ? job.title.toLowerCase() : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(filteredData);
      setSearch(text);
      setIsLoading(false);
    } else {
      setFilteredData([]);
      setSearch("");
    }
  };

  if (isLoading) {
    <Loading />
  }

  return (
    <VStack bg="gray.300" flex={1}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <HStack
        h="120"
        bg="primary.100"
        roundedBottomLeft="30"
        roundedBottomRight="30"
        alignItems="center"
        justifyContent="space-between"
        px="14"
        pt={10}
      >
        <Button
          variant="outline"
          borderWidth={0}
          p={0}
          leftIcon={
            <Icon
              size={8}
              color="white"
              as={<Feather name="log-out" size={24} color="white" />}
            />
          }
          _pressed={{
            bg: "transparent",
          }}
          onPress={handleLogout}
        />

        <VStack
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          <HStack space="1">
            <Text
              color="green.300"
              fontSize="xs"
              fontWeight={500}
              letterSpacing="xs"
            >
              Current location
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color={colors.green[300]}
            />
          </HStack>
          <VStack>
            <Text color="white" fontWeight={500} letterSpacing="xs">
              {displayCurrentAddress}
            </Text>
          </VStack>
        </VStack>

        <Button
          bg="transparent"
          _pressed={{
            bg: "transparent",
          }}
          leftIcon={
            <Icon
              size={8}
              as={
                <MaterialCommunityIcons
                  name="pencil-plus-outline"
                  size={40}
                  color="white"
                />
              }
            />
          }
          onPress={registerJob}
        />
      </HStack>

      <VStack p={5} mt="34">
        <HStack w="full" space="2">
          <Input
            placeholder="Search job or positions ..."
            borderWidth={0}
            w="full"
            bg="white"
            h="50"
            _focus={{
              bg: "white",
              borderWidth: 1,
              borderColor: "gray.100",
            }}
            fontSize="sm"
            fontWeight={400}
            onChangeText={(text) => searchFilter(text)}
            leftElement={
              <Icon
                size={6}
                as={<Feather name="search" color="gray.200" />}
                ml={4}
              />
            }
          />
        </HStack>
        <HStack mt="34" justifyContent="space-between" alignItems="center">
          <Heading
            fontWeight={500}
            fontSize="lg"
            letterSpacing="sm"
            color="primary.100"
          >
            Job Category
          </Heading>
          <Box
            alignItems="center"
            justifyContent="center"
            borderRadius={1}
            borderWidth={1}
            px={3}
            py={1}
            rounded="full"
            borderColor="green.300"
          >
            <Text>{jobs.length}</Text>
          </Box>
        </HStack>

        <HStack
          mt="22"
          w="full"
          space={3}
          alignItems="center"
          justifyContent="center"
        >
          <Category
            flexGrow={1}
            title="Remote"
            onPress={() => setCategory("Remote")}
          />
          <Category
            flexGrow={1}
            title="Presential"
            onPress={() => setCategory("Presential")}
          />
        </HStack>

        <HStack
          mt="34"
          mb={6}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            fontWeight={500}
            fontSize="lg"
            letterSpacing="sm"
            color="primary.100"
          >
            Recent Jobs
          </Heading>
        </HStack>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Job data={item} onPress={() => handleJobDetails(item.id)} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 500,
            }}
            ListEmptyComponent={() => (
              <Center pt={20}>
                <HStack alignItems="center" space={3}>
                  <Ionicons
                    name="ios-alert-circle-outline"
                    size={24}
                    color={colors.gray[200]}
                  />
                  <Text fontWeight={400} fontSize="2xl" color="gray.200">
                    No results for this search. Try again.
                  </Text>
                </HStack>
              </Center>
            )}
          />
        ) : (
          <FlatList
            data={jobs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Job data={item} onPress={() => handleJobDetails(item.id)} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 500,
            }}
            ListEmptyComponent={() => (
              <Center pt={20}>
                <HStack alignItems="center" space={3}>
                  <Ionicons
                    name="ios-alert-circle-outline"
                    size={24}
                    color={colors.gray[200]}
                  />
                  <Text fontWeight={400} fontSize="2xl" color="gray.200">
                    No jobs registered.
                  </Text>
                </HStack>
              </Center>
            )}
          />
        )}
      </VStack>
    </VStack>
  );
}

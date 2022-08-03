import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  VStack,
  Text,
  Image,
  Heading,
  HStack,
  Box,
  Link,
  useTheme,
  ScrollView,
  StatusBar,
} from "native-base";

import { Header } from "../components/Header";
import { JobProps } from "../components/Job";
import firestore from "@react-native-firebase/firestore";
import { JobFireStoreDTO } from "../DTOs/JobFireStoreDTO";

import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

type RouteParams = {
  jobId: string;
};

type JobDetails = JobProps & {};

export function Details() {
  const [job, setJob] = useState<JobDetails>({} as JobDetails);
  const route = useRoute();
  const { jobId } = route.params as RouteParams;

  const { colors } = useTheme();

  useEffect(() => {
    firestore()
      .collection<JobFireStoreDTO>("jobs")
      .doc(jobId)
      .get()
      .then((doc) => {
        const {
          company,
          title,
          description,
          requirements,
          type,
          email,
          whatsapp,
        } = doc.data();

        setJob({
          id: doc.id,
          company,
          title,
          description,
          requirements,
          type,
          email,
          whatsapp,
        });
      });
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="tranparent"
      />
      <Header title={job.company} isEnable={true} />
      <VStack
        flex={1}
        mt={-10}
        pt={8}
        px="22"
        rounded="30"
        bg="white"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <VStack alignItems="center" mt={10}>
          <Heading fontWeight={500} fontSize="3xl" mb="2" color="primary.100">
            {job.company}
          </Heading>
          <Text fontWeight={600}>{job.title}</Text>

          <Box
            mt="28"
            bg="green.100"
            w="130"
            textAlign="center"
            px={5}
            py={2}
            rounded="10"
            alignItems="center"
          >
            <Text color="green.300">{job.type}</Text>
          </Box>
        </VStack>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingBottom: 100,
          }}
        >
          <VStack mt="28">
            <Heading
              fontWeight={500}
              color="primary.100"
              letterSpacing="sm"
              mb={2}
            >
              Description
            </Heading>
            <Text
              fontWeight={400}
              color="gray.600"
              letterSpacing="xs"
              fontSize="xs"
            >
              {job.description}
            </Text>
          </VStack>

          <VStack mt="28">
            <Heading
              fontWeight={500}
              color="primary.100"
              letterSpacing="sm"
              mb={2}
            >
              Requirements
            </Heading>
            <Text fontWeight={400} color="gray.600" fontSize="xs" mb={4}>
              {job.requirements}
            </Text>
          </VStack>
        </ScrollView>
      </VStack>
      <HStack space={5} bg="white" w="full" px="22" pb={6}>
        <Link
          bg="white"
          rounded={5}
          flexGrow={1}
          h={16}
          borderWidth={1}
          borderColor="gray.100"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          _text={{
            color: "gray.200",
            fontWeight: 600,
            textDecoration: "none",
          }}
          href={`mailto:${job.email}`}
        >
          <FontAwesome
            name="envelope"
            size={20}
            color={colors.gray[200]}
            style={{
              paddingRight: 10,
            }}
          />
          Email
        </Link>

        <Link
          bg="green.300"
          href={`https://api.whatsapp.com/send?phone=${job.whatsapp}&text=Hi!%20Would%20like%20to%20know%20more%20about%20the%20job%20at%20the%20${job.company}.`}
          rounded={5}
          flexGrow={1}
          h={16}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          _text={{
            color: "white",
            fontWeight: 600,
            textDecoration: "none",
          }}
          // onPress={openWhatsApp}
        >
          <FontAwesome
            name="whatsapp"
            size={20}
            color="white"
            style={{
              paddingRight: 10,
            }}
          />
          WhatsApp
        </Link>
      </HStack>
    </>
  );
}

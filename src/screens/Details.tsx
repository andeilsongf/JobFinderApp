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
      <Header title={job.company} isEnable={true} />
      <VStack
        flex={1}
        mt={-10}
        pt={8}
        px="22"
        rounded="30"
        bg="white"
        overflow="hidden"
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
        >
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            w="70"
            h="70"
            alt="Logo"
            alignSelf="center"
            rounded={20}
          />
        </Box>
        <VStack alignItems="center">
          <Heading fontWeight={500} fontSize="lg" mb="2" color="primary.100">
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

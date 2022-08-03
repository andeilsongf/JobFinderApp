import {
  Heading,
  Pressable,
  Image,
  Text,
  VStack,
  HStack,
  IPressableProps,
  Box,
} from "native-base";

export type JobProps = {
  id: string;
  company: string;
  title: string;
  description?: string;
  type: "Remote" | "Presential";
  requirements?: string;
  email?: string;
  whatsapp?: string;
};

type Props = IPressableProps & {
  data: JobProps;
};

export function Job({ data, ...rest }: Props) {
  return (
    <Pressable
      bg="white"
      px={4}
      py={4}
      mb="27"
      justifyContent="flex-start"
      rounded="10"
      _pressed={{
        bg: "white",
      }}
      {...rest}
    >
      <HStack space={5} alignItems="center">
        <Box
          w="65"
          h="65"
          rounded="10"
          bg="green.400"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="30"
            fontWeight={600}
            color="green.100"
            textAlign="center"
          >
            {data.company.charAt(0)}
          </Text>
        </Box>
        <VStack>
          <Heading fontSize="sm" mb={2} fontWeight={500} color="primary.100">
            {data.title}
          </Heading>
          <Text color="gray.200" fontSize="xs">
            {data.company} • {data.type}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}

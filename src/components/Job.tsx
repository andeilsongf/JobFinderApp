import {
  Heading,
  Pressable,
  IButtonProps,
  Image,
  Text,
  VStack,
  HStack,
  IPressableProps,
} from "native-base";

export type JobProps = IButtonProps & {
  id: string;
  title: string;
  company: string;
  type: "Remote" | "Full Time";
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
        <Image
          alt={data.title}
          w="65"
          h="65"
          rounded="10"
          source={{
            uri: "https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png",
          }}
        />
        <VStack>
          <Heading fontSize="sm" fontWeight={500} color="primary.100">
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

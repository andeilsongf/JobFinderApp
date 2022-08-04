import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  IButtonProps,
  Heading,
  HStack,
  Icon,
  useTheme,
  VStack,
} from "native-base";

type Props = IButtonProps & {
  title: string;
  isEnable: boolean;
};

export function Header({ title, isEnable, ...rest }: Props) {
  const { colors } = useTheme();
  const isShow = isEnable ? true : false;

  const navigation = useNavigation();

  function handleBlack() {
    navigation.goBack();
  }

  return (
    <VStack bg="gray.300" pb="20">
      <HStack
        alignItems="center"
        pt="60"
        justifyContent="space-between"
        px="23"
      >
        <Button
          variant="outline"
          borderWidth={0}
          p={0}
          leftIcon={
            <Icon
              size={8}
              color="primary.100"
              as={
                <MaterialIcons
                  name="keyboard-arrow-left"
                  color={colors.green[300]}
                />
              }
            />
          }
          _pressed={{
            bg: "transparent",
          }}
          onPress={handleBlack}
        />
        <Heading flexGrow={1} textAlign="center" mr={23}  color="gray.500" fontSize="sm" fontWeight={400}>
          {title}
        </Heading>
      </HStack>
    </VStack>
  );
}

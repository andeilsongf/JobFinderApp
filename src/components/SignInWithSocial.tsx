import React from "react";
import {
  Pressable,
  IPressableProps,
  Text,
  VStack,
} from "native-base";
import { SvgProps } from "react-native-svg";

type Props = IPressableProps & {
  svg: React.FC<SvgProps>;
};

export function SignInWithSocial({svg: Svg, ...rest }: Props) {
  return (
    <Pressable
      alignItems="center"
      justifyContent="center"
      bg="white"
      h={16}
      flexDir="row"
      rounded={5}
      {...rest}
    >
      <VStack>
        <Svg />
      </VStack>
    </Pressable>
  );
}

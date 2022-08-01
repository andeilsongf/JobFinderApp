import {
  Button as ButtonNativeBase,
  IButtonProps,
} from "native-base";

type Props = IButtonProps & {
  title: string;
  width?: string;
};

export function Button({ title, width, ...rest }: Props) {

  return (
    <ButtonNativeBase
      w={width}
      bg="green.200"
      mb={8}
      _text={{
        letterSpacing: "md",
        fontWeight: 400,
        fontSize: "xl",
      }}
      _pressed={{
        bg: "green.300",
      }}
      {...rest}
    >
      {title}
    </ButtonNativeBase>
  );
}

import { Button, Heading, Text, IButtonProps } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Category({ title, ...rest }: Props) {
  return (
    <Button
      bg="white"
      rounded="10"
      alignItems="center"
      justifyContent="center"
      h={20}
      style={{
        shadowColor: "rgba(64, 64, 64, .16)",
        shadowOpacity: 0.16,
        shadowRadius: 10,
        shadowOffset: {
          width: -12,
          height: -12,
        },
      }}
      _pressed={{
        bg: "green.100",
      }}
      {...rest}
    >
      <Heading
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        fontSize="sm"
        fontWeight={500}
        color="primary.100"
      >
        {title}
      </Heading>
    </Button>
  );
}

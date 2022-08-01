import { Button, Heading, Text, IButtonProps } from "native-base";

type Props = IButtonProps & {
  title: string;
  quantity: string;
};

export function Category({ title, quantity, ...rest }: Props) {
  return (
    <Button
      
      bg="white"
      rounded="10"
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
        bg: "white",
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
        mb={2}
      >
        {title}
      </Heading>
      <Text
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        fontSize="2xs"
        fontWeight={400}
        color="gray.400"
      >
        {quantity} jobs
      </Text>
    </Button>
  );
}

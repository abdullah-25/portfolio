import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";

export default function CardComponent({ img, title, description }) {
  return (
    <Center>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={img}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{description}</Text>
          </CardBody>

          <CardFooter>
            {/* <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button> */}
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}

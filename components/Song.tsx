import {
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Song = ({ id, name, artist, albumCoverUrl }) => (
  <ListItem
    border="1px solid"
    borderColor="gray.200"
    borderRadius={4}
    my={2}
    bg="white"
  >
    <Flex as="a">
      <Image
        size="100px"
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        objectFit="cover"
        src={albumCoverUrl}
        alt={name}
        mr={4}
      />
      <Stack mt={4}>
        <Heading size="lg" fontWeight="500">
          {name}
        </Heading>
        <Text color="gray.700">{artist.name}</Text>
      </Stack>
      <Stack ml="auto" mt={4} >
        <NextLink href={`/ssr-songs/[id]`} as={`/ssr-songs/${id}`} passHref>
          <Button margin="5px" size="xs">SSR</Button>
        </NextLink>
        <NextLink href={`/songs/[id]`} as={`/songs/${id}`} passHref>
          <Button  margin="5px" size="xs"> SSG</Button>
        </NextLink>
      </Stack>
    </Flex>
  </ListItem>
);

export default Song;

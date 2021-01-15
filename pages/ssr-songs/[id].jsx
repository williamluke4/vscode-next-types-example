import { Box, Button, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { prisma } from '../../db/prisma';

export const getServerSideProps = async (ctx) => {
  const song = await prisma.song.findUnique({
    include: { artist: true },
    where: {
      id: Number(ctx.params.id)
    }
  });

  return {
    props: {
      song
    }
  };
};

function SongPage({ song }) {
  return (
    <Box mt={8}>
      <Heading fontWeight="800">{song.name}</Heading>
      <Text color="grey.700" mb={4}>
        {song.artist.name}
      </Text>
      <Text color="grey.700" mb={4} style={{ wordWrap: 'break-word' }}>
        {JSON.stringify(song)}
      </Text>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${song.youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <NextLink href="/" passHref>
        <Button as="a" mt={4} leftIcon="arrow-back">
          Back
        </Button>
      </NextLink>
    </Box>
  );
}

export default SongPage
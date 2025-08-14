import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading fontSize={"3xl"} marginBottom={2} >Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={5} borderColor="gray.200">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button 
            whiteSpace={"normal"}
              textAlign="left"
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            colorScheme={selectedGenre?.id === genre.id ?  "red" : "normal"}
              _hover={{ color: "red.300" }}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;

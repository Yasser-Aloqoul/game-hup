import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="14px"
        spacing={10}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {games && games.map((game) =>( <GameCardContainer><GameCard key={game.id} game={game} /> </GameCardContainer>))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

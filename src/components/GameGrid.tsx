import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";





const GameGrid = () => {
    const {games,error} = useGames();

  return (
    <ul>
        <>
        <Text>{error && <p>oh shit there's error </p>}</Text>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </>
    </ul>
  )
}

export default GameGrid
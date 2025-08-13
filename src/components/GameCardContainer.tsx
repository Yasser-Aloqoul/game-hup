import { Box } from "@chakra-ui/react";
import type { ReactNode} from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius="15px" overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;

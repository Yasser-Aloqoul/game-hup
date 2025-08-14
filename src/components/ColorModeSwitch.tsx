import { HStack, Switch, Text , useColorMode} from '@chakra-ui/react'


const ColorModeSwitch = () => {


    const {toggleColorMode,colorMode} =useColorMode();



  return (
    <HStack>
        <Switch    colorScheme={'blue'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        
        <Text  scaleX={colorMode === 'dark' ? 0 : 1 }>Like Her Hart</Text>
    </HStack>
  )
}

export default ColorModeSwitch
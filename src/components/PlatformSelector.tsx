import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronCompactDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}


const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {

      const {data,error} = usePlatform();

    if(error) return

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronCompactDown/>} >{selectedPlatform?.name || 'Plaform'}</MenuButton>
            <MenuList>
              {data.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector
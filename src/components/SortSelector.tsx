import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react"
import { BiSolidChevronDown } from "react-icons/bi"

interface Props {
    onSelectSortOrder: (sortOrder: string) => void
}


const SortSelector = ({onSelectSortOrder}:Props) => {

    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

    const [selectedSort, setSelectedSort] = useState('')

    const handleSelectedSort = (value:string,label:string) => {
        setSelectedSort(label);
        onSelectSortOrder(value);
    }

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Order by {selectedSort ||'Relevence'}</MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={() =>handleSelectedSort(order.value,order.label)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>

        </Menu>
    </>
  )
}

export default SortSelector
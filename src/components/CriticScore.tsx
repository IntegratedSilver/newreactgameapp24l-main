import { Badge } from "@chakra-ui/react"

interface Props {
    score:number
}

const CriticScore = ({score}:Props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow': ''
  return (
    <>
        <Badge colorScheme={color} borderRadius={35} padding={2} fontSize={15}>
            {score}
        </Badge>
    </>
  )
}

export default CriticScore
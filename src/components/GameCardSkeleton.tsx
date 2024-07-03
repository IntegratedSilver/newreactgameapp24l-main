import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
  return (
    <>
        <Card width={300} borderRadius={20}>
            <Skeleton height={300} borderRadius={20}>
                <CardBody>
                    <SkeletonText/>
                </CardBody>
            </Skeleton>
        </Card>
    </>
  )
}

export default GameCardSkeleton
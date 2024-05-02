import { Card, CardBody, Flex, Skeleton, SkeletonText } from "@chakra-ui/react"

const ProductCardSkeletons = () => {
    return <Card>
        <Skeleton h="300px" />
        <CardBody>
            <SkeletonText noOfLines={1} skeletonHeight={7} pt={5} />
            <SkeletonText my={4} skeletonHeight={4} />
            <SkeletonText noOfLines={1} skeletonHeight={4} />
            <Flex align="center" justifyContent="center" gap={5} mt={5}>
                <Skeleton w="50px" h="50px" />
                <Skeleton w="50px" h="50px" />
                <Skeleton w="50px" h="50px" />
            </Flex>
        </CardBody>
    </Card>

}
export default ProductCardSkeletons
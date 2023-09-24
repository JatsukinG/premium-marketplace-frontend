import { gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation CreateProductMutation($data: ProductInput!) {
        createProduct(data: $data) {
            data {
                attributes {
                    name
                    vehicleType
                    price
                    description
                    offPercent
                    user_id {
                        data {
                            id
                            attributes {
                                username
                            }
                        }
                    }
                }
            }
        }
    }
`

export default CREATE_PRODUCT;
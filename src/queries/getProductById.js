import {gql} from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
    query GetProductByID($id: ID) {
        product(id: $id) {
            data {
                id
                attributes {
                    name
                    vehicleType
                    price
                    offPercent
                    description
                    image
                    user_id {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default GET_PRODUCT_BY_ID
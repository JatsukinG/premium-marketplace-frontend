import {gql} from "@apollo/client";

const GET_PRODUCTS = gql`
    query {
        products(
            pagination: { pageSize: 20 }
        ) {
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

export default GET_PRODUCTS
import { gql } from "@apollo/client";

export const PRODUCT_INFO = gql`
  fragment ProductInfo on Product {
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
`;

const GET_DASHBOARD_PRODUCTS = gql`
    ${PRODUCT_INFO}
    query {
        carProducts: products (
            pagination: { pageSize: 5 },
            filters: {
                vehicleType: {
                    eq: "carro"
                }
            }
        ) {
            data {
                id
                attributes {
                    ...ProductInfo
                }
            }
        }
        motorcycleProducts: products (
            pagination: { pageSize: 5 },
            filters: {
                vehicleType: {
                    eq: "moto"
                }
            }
        ) {
            data {
                id
                attributes {
                    ...ProductInfo
                }
            }
        }
    }
`;

export default GET_DASHBOARD_PRODUCTS
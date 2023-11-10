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
                    eq: "car"
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
                    eq: "bike"
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
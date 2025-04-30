
import { collectionFragment } from "../fragments/collection";
import productFragment from "../fragments/product";
// import productFragment from "../fragments/product";

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 20, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 20) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;
import { gql } from "@apollo/client";

// TODO: Dynamic user
export const GET_USER_GARDENS = gql`
  query GetUserGardens {
    user(where: { username: "alicethebest" }) {
      gardens {
        id
        name
        height
        width
        userId
        beds {
          id
          coord_x
          coord_y
          name
          height
          width
          notes
          plants {
            plant {
              CommonName
            }
          }
        }
      }
    }
  }
`;

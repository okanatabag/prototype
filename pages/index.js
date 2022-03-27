import Layout from "../components/organisms/Layout"
import { Wrapper } from "../components/atoms"
import { gql } from "@apollo/client";
import client from "../helpers/apolloClient";

export default function Home({data}) {
  return (
    <Wrapper>
      <Layout data={data}/>
    </Wrapper>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          id
          title
          imageFile
          detailUrl
          cargoType
          price
          favorite
        }
      }
    `,
  });

  return {
    props: {
      data:data.products
    },
 };
}


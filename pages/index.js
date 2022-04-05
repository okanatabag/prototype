<<<<<<< HEAD
import { gql } from "@apollo/client";
import Layout from "../components/organisms/Layout";
import { Wrapper } from "../components/atoms";
import client from "../helpers/apolloClient";

export default function Home({ data }) {
	return (
		<Wrapper>
			<Layout data={data} />
		</Wrapper>
	);
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
			data: data.products,
		},
	};
}
=======
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

>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1

<<<<<<< HEAD
import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	link: new HttpLink({ uri: "http://localhost:4000/", fetch }),
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			fetchPolicy: "network-only",
			errorPolicy: "all",
		},
		mutate: {
			errorPolicy: "all",
		},
	},
});

export default client;
=======
import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/', fetch }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
  },
});

export default client;
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1

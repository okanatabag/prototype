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

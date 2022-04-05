import GlobalStyle from "../styles/globalStyles";
import { ContextProvider } from "../context/ContextProvider";

function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</ContextProvider>
	);
}

export default MyApp;

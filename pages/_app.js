<<<<<<< HEAD
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
=======
import GlobalStyle from "../styles/globalStyles"
import { ContextProvider } from "../context/ContextProvider"

function MyApp({ Component, pageProps }) {
  return (
      <ContextProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ContextProvider>
  )
}

export default MyApp
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1

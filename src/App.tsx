import React from "react";
import Router from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import scatterSeedTheme from "./theme";
import { API_URL } from "./utils/api.utils";

console.log("API URL:", API_URL);

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={scatterSeedTheme}>
        <Router />
      </PaperProvider>
    </ApolloProvider>
  );
}

import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Container>
      <Component {...pageProps} />
    </Container>
  </Layout>;
}

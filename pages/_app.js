import "@/styles/globals.css";
import { LoaderProvider } from "@/Context/LoaderContext";

export default function App({ Component, pageProps }) {
  return (
    <LoaderProvider>
      <Component {...pageProps} />
    </LoaderProvider>
  );
}

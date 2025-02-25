import "@/styles/globals.css";
import { LoaderProvider } from "@/Context/LoaderContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
    </Provider>
  );
}
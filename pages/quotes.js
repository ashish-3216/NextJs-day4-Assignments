import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuotes } from "../redux/quoteSlice";

export default function Quotes() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        dispatch(setQuotes(data.quotes)); // Fix: Use `data.quotes`
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuotes();
  }, [dispatch]);
  

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

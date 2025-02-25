import React, { useReducer, useState, useContext } from "react";
import productReducer from "../Reducer/productReducer";
import ActionReducer from "../Action/ActionReducer";
import { LoaderContext } from "@/Context/LoaderContext";
import { useRouter } from "next/navigation";
const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function Home() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { loading, setLoading } = useContext(LoaderContext);
  const router = useRouter();
  const addProduct = () => {
    const newProduct = {
      id: state.products.length + 1,
      title: title,
      price: price,
      description: description,
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <br />
      <button className="get-products-button" onClick={() => {
        setLoading(true);
        ActionReducer(dispatch);
        setLoading(false);
      }}>Get Products</button>    
      {loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul className="product-list">
        {state.products.map((product) => {
          return (
            <li className="product-item" key={product.id}>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button
                className="delete-button"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="add-button"
          onClick={() => {
            addProduct();
            setTitle("");
            setPrice("");
            setDescription("");
          }}
        >
          Add Product
        </button>
      </div>
      <button className="question-3-button" onClick={() => router.push("/quotes")}>
        Question 3 : got to Quotes
      </button>
    </div>
  );
}

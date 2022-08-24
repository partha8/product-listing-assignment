import React, { useEffect, useReducer } from "react";
import { Filters } from "./components/Filters/Filters";
import { products } from "./data/products";
import { filterReducer } from "./reducers/filterReducer";
import { useSortedProducts } from "./hooks/useSortedProducts";
import { Card } from "./components/Card/Card";

export const App = () => {
  const [filterState, dispatch] = useReducer(filterReducer, {
    sortByIdealFor: "women",
    sortByPrice: null,
    brandsTypesArray: [],
    sizeTypesArray: [],
  });

  const productsList = products.filter(
    (product) => product.idealFor === filterState.sortByIdealFor
  );

  useEffect(() => {
    dispatch({ type: "CLEAR_FILTERS" });
  }, [filterState.sortByIdealFor]);

  const sortedProducts = useSortedProducts(productsList, filterState);
  return (
    <div className="App">
      <Filters
        dispatch={dispatch}
        productsList={productsList}
        filterState={filterState}
      />

      <div className="products">
        {sortedProducts.map((product) => {
          return <Card {...product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

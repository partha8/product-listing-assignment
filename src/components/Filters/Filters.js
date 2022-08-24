import "./filters.css";

export const Filters = ({ dispatch, filterState, productsList }) => {
  const brandTypes = [...new Set(productsList.map((product) => product.brand))];

  const handleBrandChange = (e) => {
    let arr = [...filterState.brandsTypesArray];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr = arr.filter((brandType) => brandType !== e.target.value);
    }
    dispatch({ type: "SET_BRANDS_TYPES", payload: arr });
  };

  const handleSizeChange = (e) => {
    console.log(e.target.value, e.target.checked);

    let arr = [...filterState.sizeTypesArray];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr = arr.filter((sizeType) => sizeType !== e.target.value);
    }

    dispatch({ type: "SET_SIZE", payload: arr });
  };

  return (
    <aside className="filters">
      <div className="underline flex-center">
        <h5 className="filters-title">Filter by</h5>
        <span
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
          className="text-right"
        >
          Clear
        </span>
      </div>
      <ul>
        <li className=" filter-type">
          <p className="filter-type-title">Categories </p>
          <form className="sub-categories">
            <label className="category">
              <input
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_IDEALFOR",
                    payload: "women",
                  })
                }
                type="radio"
                checked={filterState.sortByIdealFor === "women"}
              />
              women
            </label>
            <label className="category">
              <input
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_IDEALFOR",
                    payload: "men",
                  })
                }
                type="radio"
                checked={filterState.sortByIdealFor === "men"}
              />
              men
            </label>
          </form>
        </li>

        <li className=" filter-type">
          <p className="filter-type-title">Collection </p>
          <form className="sub-categories">
            {brandTypes.map((type, index) => {
              return (
                <label className="category" for={type} key={index}>
                  <input
                    value={type}
                    checked={filterState.brandsTypesArray.some(
                      (brandType) => brandType === type
                    )}
                    onChange={handleBrandChange}
                    type="checkbox"
                    name="collection"
                    id={type}
                  />
                  {type}
                </label>
              );
            })}
          </form>
        </li>

        <li className=" filter-type">
          <p className="filter-type-title">Sizes </p>
          <form className="sub-categories">
            <label className="category" for="S">
              <input
                value="S"
                checked={filterState.sizeTypesArray.some(
                  (sizeType) => sizeType === "S"
                )}
                onChange={handleSizeChange}
                type="checkbox"
                name="size"
                id='S'
              />
              S
            </label>

            <label className="category" for="M">
              <input
                value="M"
                checked={filterState.sizeTypesArray.some(
                  (sizeType) => sizeType === "M"
                )}
                onChange={handleSizeChange}
                type="checkbox"
                name="size"
                id='M'
              />
              M
            </label>

            <label className="category" for="L">
              <input
                value="L"
                checked={filterState.sizeTypesArray.some(
                  (sizeType) => sizeType === "L"
                )}
                onChange={handleSizeChange}
                type="checkbox"
                name="size"
                id='L'
              />
              L
            </label>

            <label className="category" for="XL">
              <input
                value="XL"
                checked={filterState.sizeTypesArray.some(
                  (sizeType) => sizeType === "XL"
                )}
                onChange={handleSizeChange}
                type="checkbox"
                name="size"
                id='XL'
              />
              XL
            </label>
          </form>
        </li>

        <li className="filter-type">
          <p className="filter-type-title">Price</p>
          <form className="sub-categories">
            <label className="category">
              <input
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_PRICE",
                    payload: "HIGH_TO_LOW",
                  })
                }
                type="radio"
                name="price-sort"
                checked={filterState.sortByPrice === "HIGH_TO_LOW"}
              />
              High to Low
            </label>
            <label className="category">
              <input
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_PRICE",
                    payload: "LOW_TO_HIGH",
                  })
                }
                type="radio"
                name="price-sort"
                checked={filterState.sortByPrice === "LOW_TO_HIGH"}
              />
              Low to High
            </label>
          </form>
        </li>
      </ul>
    </aside>
  );
};

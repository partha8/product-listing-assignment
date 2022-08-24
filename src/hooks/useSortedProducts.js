export const useSortedProducts = (productsList, filterState) => {
  let newProductsList = [...productsList];

  const {
    sortBySize,
    sortByIdealFor,
    sortByPrice,
    brandsTypesArray,
    sizeTypesArray,
  } = filterState;

  if (sortBySize && sortBySize === "S") {
    newProductsList = newProductsList.filter((product) => product.size === "S");
  }
  if (sortBySize && sortBySize === "M") {
    newProductsList = newProductsList.filter((product) => product.size === "M");
  }
  if (sortBySize && sortBySize === "L") {
    newProductsList = newProductsList.filter((product) => product.size === "L");
  }
  if (sortBySize && sortBySize === "XL") {
    newProductsList = newProductsList.filter(
      (product) => product.size === "XL"
    );
  }

  if (sortByIdealFor === "men") {
    newProductsList = newProductsList.filter(
      (product) => product.idealFor === "men"
    );
  }

  if (sortByIdealFor === "women") {
    newProductsList = newProductsList.filter(
      (product) => product.idealFor === "women"
    );
  }

  if (brandsTypesArray.length > 0) {
    newProductsList = newProductsList.filter((product) => {
      return brandsTypesArray.includes(product.brand);
    });
  }

  if (sizeTypesArray.length > 0) {
    newProductsList = newProductsList.filter((product) => {
      return sizeTypesArray.includes(product.size);
    });
  }
  if (sortByPrice && sortByPrice === "HIGH_TO_LOW") {
    newProductsList = newProductsList.sort((a, b) => b["price"] - a["price"]);
  }

  if (sortByPrice && sortByPrice === "LOW_TO_HIGH") {
    newProductsList = newProductsList.sort((a, b) => a["price"] - b["price"]);
  }

  return [...newProductsList];
};

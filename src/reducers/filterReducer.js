export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE": {
      return {
        ...state,
        sortByPrice: action.payload,
      };
    }
    case "SORT_BY_IDEALFOR": {
      return {
        ...state,
        sortByIdealFor: action.payload,
      };
    }

    case "SORT_BY_SIZE": {
      return {
        ...state,
        sortBySize: action.payload,
      };
    }
    case "SET_BRANDS_TYPES": {
      return {
        ...state,
        brandsTypesArray: action.payload,
      };
    }

    case "SET_SIZE": {
      return {
        ...state,
        sizeTypesArray: action.payload,
      };
    }
    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortByPrice: null,
        brandsTypesArray: [],
        sizeTypesArray: [],
      };
    }
    default:
      return state;
  }
};

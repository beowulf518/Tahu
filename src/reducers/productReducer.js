
import * as TYPES from '../actions/types'

const initialState = {
  nfts: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        nfts: action.payload
      };
    case TYPES.SEARCH_PRODUCT:
      const res = state.nfts.map(item => {
        if(item.title.includes(action.payload) || item.description.includes(action.payload)){
          return item;
        }
      });
      return {
        ...state,
        nfts: res
      };
    default:
      return state;
  }
}
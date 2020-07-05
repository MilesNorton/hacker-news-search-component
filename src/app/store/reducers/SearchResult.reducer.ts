import { IState, RootAction } from "@utils";
import { triggerDataFetch } from "@actions";
import { Reducer, getType } from "typesafe-actions";

const initialState: IState = {
  results: undefined,
};

export const SearchResult: Reducer<IState, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(triggerDataFetch.request):
    case getType(triggerDataFetch.failure):
      return {
        ...state,
      };
    case getType(triggerDataFetch.success):
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

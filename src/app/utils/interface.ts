import { ActionType, StateType } from "typesafe-actions";
import { Epic } from "redux-observable";
import * as actions from "@actions";
import * as reducers from "@reducers";
import { compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface ISearchResults {
  hits: ISearchResult[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}
export interface ISearchResult {
  author: string;
  comment_text: null;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: null;
  points: number;
  story_id: null;
  story_text: null;
  story_title?: string;
  story_url?: string;
  title?: string;
  url?: string;
}

export interface IState {
  results: ISearchResults | undefined;
}

export type RootAction = ActionType<typeof actions>;
export type RootState = StateType<typeof reducers>;

export type RootEpic = Epic<RootAction, RootAction, RootState>;

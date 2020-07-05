import { createAsyncAction } from "typesafe-actions";
import { ISearchResults } from "@utils";

export const triggerDataFetch = createAsyncAction(
  "TRIGGER_DATA_FETCH_REQUEST",
  "TRIGGER_DATA_FETCH_SUCCESS",
  "TRIGGER_DATA_FETCH_ERROR"
)<{ url: string }, ISearchResults, Error>();

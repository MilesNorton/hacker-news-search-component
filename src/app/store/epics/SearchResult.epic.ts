import { isActionOf } from "typesafe-actions";
import { filter, catchError, mergeMap, switchMap } from "rxjs/operators";
import { triggerDataFetch } from "@actions";
import { of } from "rxjs";
import { RootEpic } from "@utils";

export const fetchResults$: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(triggerDataFetch.request)),
    switchMap(({ payload: { url } }) => fetch(url)),
    mergeMap((response) => response.json()),
    switchMap((jsonResult) => of(triggerDataFetch.success(jsonResult))),
    catchError((error) => of(triggerDataFetch.failure(error!)))
  );

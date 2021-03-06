import { RootEpic } from "@utils";
import { tap, ignoreElements } from "rxjs/operators";

export const logging$: RootEpic = (action$) =>
  action$.pipe(
    // tslint:disable-next-line:no-console
    tap((action) => console.log("Action received:", action)),
    ignoreElements()
  );

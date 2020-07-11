import * as React from "react";
import { Container } from "@components";

interface IProps {
  errorString: string;
}
export const FailedResult: React.FunctionComponent<IProps> = ({
  errorString,
}) => <Container>{errorString}</Container>;

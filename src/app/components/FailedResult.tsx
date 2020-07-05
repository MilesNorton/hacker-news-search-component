import * as React from "react";
import { Container } from "semantic-ui-react";

interface IProps {
  errorString: string;
}
export const FailedResult: React.FunctionComponent<IProps> = ({
  errorString,
}) => (
  <Container textAlign="center" className="result-container-no-results">
    {errorString}
  </Container>
);

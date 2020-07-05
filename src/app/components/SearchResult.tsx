import * as React from "react";
import { Card } from "semantic-ui-react";
import { ISearchResult } from "@utils";

interface IProps {
  hit: ISearchResult;
  id: number;
}
export const SearchResult: React.FunctionComponent<IProps> = ({ hit, id }) => (
  <Card id={id} fluid className="result-container">
    <Card.Content>
      <Card.Header>
        <a href={hit.url}>{hit.title}</a>
      </Card.Header>
      <Card.Meta>
        {new Date(hit.created_at_i).toLocaleDateString("en-au")}
      </Card.Meta>
      <Card.Description>Author: {hit.author}</Card.Description>
      <Card.Description>{hit.url}</Card.Description>
      <Card.Content extra>
        <a href={hit.url}>Comments({hit.num_comments || "0"})</a>
      </Card.Content>
    </Card.Content>
  </Card>
);

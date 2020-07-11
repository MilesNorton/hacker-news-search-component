import * as React from "react";
import { ISearchResult } from "@utils";
import { Card } from "@components";

interface IProps {
  hit: ISearchResult;
  id: number;
}
export const SearchResult: React.FunctionComponent<IProps> = ({ hit, id }) => (
  <Card.Container key={id}>
    <Card.Header>
      <a href={hit.url || hit.story_url}>{hit.title || hit.story_title}</a>
    </Card.Header>
    <Card.Meta>
      {new Date(hit.created_at_i).toLocaleDateString("en-au")}
    </Card.Meta>
    <Card.Author>Author: {hit.author}</Card.Author>
    <Card.Content>{hit.url || hit.story_url}</Card.Content>
    <Card.Link>
      <a href={hit.url || hit.story_url}>
        Comments ({hit.num_comments || "0"})
      </a>
    </Card.Link>
  </Card.Container>
);

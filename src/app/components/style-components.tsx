import styled from "styled-components";

export const Container = styled.div({
  width: "auto",
  marginLeft: "1em",
  marginRight: "1em",
  textAlign: "center",
});

export const Card = {
  Container: styled.div({
    WebkitBoxShadow: "0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5",

    display: "grid",
    padding: "15px",
    gridTemplateRows: "auto",
    gridAutoFlow: "row",

    fontFamily: 'Lato, "Helvetica Neue", Arial, Helvetica, sans-serif',
    lineHeight: "1.4285em",
  }),
  Header: styled.div({
    color: "#4183c4",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "1.28571429em",
    lineHeight: "1.28571429em",
  }),
  Meta: styled.div({
    fontSize: "1em",
    color: "rgba(0, 0, 0, 0.4)",
  }),
  Author: styled.div({
    marginTop: "0.5em",
    clear: "both",
    color: "rgba(0, 0, 0, 0.68)",
  }),

  Content: styled.div({
    clear: "both",
    color: "rgba(0, 0, 0, 0.68)",
  }),

  Link: styled.div({
    color: "#4183c4",
    textDecoration: "none",
  }),
};

export const Divider = styled.div({
  borderTop: "1px solid rgba(34,36,38,.15)",
  borderBottom: "1px solid rgba(255,255,255,.1)",
  margin: "1rem 0",
});

export const Segments = styled.div({
  flexDirection: "column",
  position: "relative",
  margin: "1rem 0",
  border: "1px solid rgba(34,36,38,.15)",

  boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
  borderRadius: ".28571429rem",
});

export const CustomPagination = styled.div`
  display: grid;
  grid-auto-columns: 3rem;
  grid-auto-flow: column;

  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  margin: auto;
  min-height: 1.85714286em;
  width: fit-content;

  & > * {
    text-decoration: none;
    text-align: center;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
    font-size: 0.78571429rem;
    padding: 25% 0;

    &:not(:last-child) {
      border-bottom: 0;
      box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.2);
      border-left: 0;
      border-top: 0;
    }
  }

  & > a {
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }

  & .selected {
    background-color: rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: default;
    }
  }
`;

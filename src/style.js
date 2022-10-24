import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: scroll;
  height: 200px;
  margin-top: 30px;
`;

const Table = styled.table`
  width: 100%;
  height: 200px;
`;

Table.Thead = styled.thead`
  position: sticky;
  top: 0;
  background: white;
  z-index: ${({ sticky }) => sticky && 102};
`;
Table.Tbody = styled.tbody`
  height: 200px;
`;

Table.TR = styled.tr``;

Table.TD = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-collapse: collapse;
  position: sticky;
  left: ${({ sticky }) => sticky && 0};
  z-index: ${({ sticky }) => sticky && 100};
  min-width: ${({ width }) => `${width}px`};
  right: ${({ right }) => right && 0};
  background: white;
`;

Table.TH = styled.th`
  position: sticky;
  left: ${({ sticky }) => sticky && 0};
  right: ${({ right }) => right && 0};
  z-index: ${({ sticky }) => sticky && 101};
  min-width: ${({ width }) => `${width}px`};
  background: white;
`;

export { Container, Table };

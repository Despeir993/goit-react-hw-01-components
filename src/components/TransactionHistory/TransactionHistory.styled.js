import styled from '@emotion/styled';

export const Table = styled.table`
  width: 700px;

  margin: 0 auto 100px;

  border: 1px solid lightgray;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

  tr {
    height: 50px;
  }

  td {
    text-align: center;
  }

  thead {
    background-color: teal;
  }

  tbody tr:nth-child(2n) {
    background-color: lightgray;
  }
`;

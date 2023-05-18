import styled from '@emotion/styled';
import { getRandomColor } from '../../utils/getRandomColor';

export const StatisticsContainer = styled.section`
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;

  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 60px;
  width: 60px;

  background-color: ${getRandomColor};
`;

export const Label = styled.span`
  color: whitesmoke;
`;

export const Percentage = styled.span`
  color: whitesmoke;
`;

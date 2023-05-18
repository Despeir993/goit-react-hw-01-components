import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;

  width: 200px;
  padding: 5px 8px;

  border-radius: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;

  background-color: ${({ status }) => (status ? 'lime' : 'tomato')}
}
`;

export const Name = styled.p`
  margin: 0;
`;

export const Avatar = styled.img`
  width: 48px;
`;

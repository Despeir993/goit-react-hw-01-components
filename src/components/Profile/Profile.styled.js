import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 50px auto 100px;
  padding-top: 20px;

  width: 210px;

  text-align: center;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  margin: 0 auto 20px;

  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

export const Username = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  margin-bottom: 8px;
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  height: 70px;

  border-top: 1px solid lightgray;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    flex: 1;

    background-color: whitesmoke;
  }

  li:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: grey;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

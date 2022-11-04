import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around;
  gap: 10px; */
  margin-left: -16px;
  margin-top: -16px;
`;
export const Item = styled.li`
  list-style: none;
  margin-left: 16px;
  margin-top: 16px;
  flex-basis: calc(100% / 6 - 16px);
`;
export const Img = styled.img`
  width: 100%;
`;
export const Titile = styled.h2`
  font-size: 18px;
`;
export const Text = styled.p`
  font-size: 16px;
`;

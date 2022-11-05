import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-top: -16px;
`;
export const Item = styled.li`
  list-style: none;
  margin-left: 16px;
  margin-top: 16px;
  flex-basis: calc(100% / 5 - 16px);
`;
export const Img = styled.img`
  width: 100%;
`;
export const Form = styled.form`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  width: 300px;
  padding: 4px;
  font-size: 18px;
`;
export const Button = styled.button`
  width: 50px;
  padding: 4px;
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.2;
  }
`;

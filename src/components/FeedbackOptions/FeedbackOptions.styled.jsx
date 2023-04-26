import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  &:first-of-type > button {
    background-color: #c6ff9f;
    &:hover {
      background-color: #3af91d;
    }
  }
  &:last-of-type > button {
    background-color: #f7a9a9;
    &:hover {
      background-color: #f00c51;
    }
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

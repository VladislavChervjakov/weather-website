import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  position: relative;
`;
export const SearchBoxInput = styled.input`
  padding: 0.75rem;
  border-radius: 50px;
  width: 25rem;
  outline: none;
  text-align: center;
  background-color: rgba(59, 63, 63, 0.9);
  color: #ccc;
  border: none;
  font-size: 1rem;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    fill: #9d9d9d;
  }
`;

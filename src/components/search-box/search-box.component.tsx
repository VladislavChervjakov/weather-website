import { ChangeEventHandler } from "react";
import {
  SearchBoxInput,
  SearchBoxWrapper,
  SearchIcon,
} from "./search-box.styles";
import { MdSearch } from "react-icons/md";

type SearchBoxProps = {
  placeholder: string;
  onSearchChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ placeholder, onSearchChangeHandler }: SearchBoxProps) => {
  return (
    <SearchBoxWrapper>
      <SearchBoxInput
        type="search"
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
      <SearchIcon>
        <MdSearch />
      </SearchIcon>
    </SearchBoxWrapper>
  );
};

export default SearchBox;

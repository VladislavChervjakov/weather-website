import { ChangeEvent } from "react";
import SearchBox from "../search-box/search-box.component";
import { HeaderWrapper, LogoWrapper } from "./header.styles";

const Header = () => {
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {};

  return (
    <HeaderWrapper>
      <LogoWrapper>Weather Website</LogoWrapper>
      <SearchBox
        placeholder="Type your location"
        onSearchChangeHandler={onSearchChange}
      />
      <div>Switcher</div>
    </HeaderWrapper>
  );
};

export default Header;

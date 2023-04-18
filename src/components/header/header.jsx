import React from "react";
import PrathiIntiImage from "./images/prathi logo 2016.png";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  background-color: yellow;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <img
        src={PrathiIntiImage}
        style={{ height: "42vh", padding: "20px" }}
        alt="Logo"
      />
      <h2 style={{ paddingTop: "66px", fontSize: "11vh" }}>Prathi Inti</h2>
    </StyledWrapper>
  );
};

export default Header;

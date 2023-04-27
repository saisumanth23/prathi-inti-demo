import React from "react";
import PrathiIntiImage from "./images/prathi logo 2016.png";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  background-color: yellow;
  justify-content: flex-start;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <img
        src={PrathiIntiImage}
        style={{ height: "23vh", padding: "20px" }}
        alt="Logo"
      />
      <h2 style={{ paddingTop: "6px", fontSize: "10vh" }}>Prathi Inti</h2>
    </StyledWrapper>
  );
};

export default Header;

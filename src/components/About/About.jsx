import React, { Component } from 'react';
import styled from "styled-components";

const StyledAboutUS = styled.div`
padding: 12px;
`;

class About extends Component {
  render() {
    return (
      <StyledAboutUS>
        <h2>About Prathi Inti</h2>
        <p>Prathi Inti Foods is a brand that specializes in traditional Indian pickles and foods. Prathi Inti Foods offers a wide range of pickles
           and Foods made with the finest quality ingredients sourced from local Indian farms. The brand uses traditional Indian recipes to create
           pickles and foods that are rich in flavor, aroma, and taste. They offer various pickle varieties such as mango, lemon, tamarind, ginger,
           tomato, and many more.The pickles are made in small batches to ensure the highest quality and freshness. They are carefully prepared by
           experienced chefs who use traditional techniques to bring out the authentic taste of each pickle.The pickles are made with all-natural
           ingredients, and no artificial preservatives are used in the production process.Prathi Inti Pickles are a perfect accompaniment to any
           Indian meal and can be enjoyed with rice, roti, or any other dish.Whether you're a fan of spicy or mild flavors, Prathi Inti Pickles has
           a pickle to suit your taste.
        </p>
      </StyledAboutUS>
    );
  }
}

export default About;
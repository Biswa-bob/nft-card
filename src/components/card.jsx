import React from "react";
import "./card.css";
import icon from "../images/image-equilibrium.jpg";
import iconView from "../images/icon-view.svg";
import iconEth from "../images/icon-ethereum.svg";
import iconClock from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";
const card = () => {
  return (
    <main class="container">
      <section class="main-card">
        <div class="image-container">
          <img src={icon} alt="nft" class="main-image" />
          <div class="overlay"></div>
          <img src={iconView} alt="view icon" class="view" />
        </div>
        <div class="text-container">
          <h1 class="title">Equilibrium #3429</h1>
          {/* <p class="description">
            Our Equilibrium collection promotes balance and calm.
          </p> */}
          <div class="eth-info">
            <div class="info">
              <img src={iconEth} alt="ETH" class="icon" />
              <span class="eth">0.041 ETH</span>
            </div>
            <div class="info">
              <img src={iconClock} alt="clock" class="icon" />
              <span>3 days left</span>
            </div>
          </div>
          <div class="creator-info">
            <img src={avatar} alt="Jules Wyvern" class="avatar" />
            <p class="creator-text">
              Creation of <span class="creator-name">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default card;

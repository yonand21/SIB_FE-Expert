import RestaurantSource from '../../data/Restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
    <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.webp">
        <img src="./images/heros/hero-image_1-large.webp" alt="jumbotron" crossorigin="anonymous">
      </picture>
      <div class="content">
        <h1 tabindex="0">いらしゃいませ</h1>
      </div>
    </div>

    <div class="content">
      <h2 tabindex="0" class="content-heading">Daftar Restoran</h2>
      <div id="resto-list" class="resto-list"></div>
    </div>`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;

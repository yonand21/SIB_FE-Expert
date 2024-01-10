import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<div class="resto-item" id="reveal">
<div class="resto-item-header">
  <img class="lazyload" id="resto-item-header-poster" alt="${resto.name}" 
  data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous">
  <div class="resto-item-header-rating">
    <p>💖<span class="resto-item-header-rating-score">${resto.rating}</span></p>
  </div>
</div>
<div class="resto-item-content">
  <h2 id="resto-title"><a href="/#/detail/${resto.id}" role="button">${resto.name}</a></h2>
  <h3>Kota ${resto.city}</h3>
  <p>${resto.description}</p>
</div>
</div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
    <h1 tabindex="0" class="title" id="resto-title">
      ${resto.name}
    </h1>
    <img class="lazyload" id="resto-item-header-poster" alt="${resto.name}"
    data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous">
    <div class="info">
      <h2 tabindex="0">Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>💖 ${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2 tabindex="0">Overview</h2>
      <p>${resto.description}</p>
    </div>

  </div>
`;

const createRestoReviewTemplate = (reviews) => `
<div class="review">
<p>
<span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
</p>
<p>${reviews.review}</p>
</div>
`;

const createFavoriteButtonTemplate = () => `
  <button tabindex="0" aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button tabindex="0" aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};

import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/Restaurant-source';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import Review from '../../utils/review';

const Detail = {
  async render() {
    return `
      <div id="resto-detail" class="resto-detail"></div>
      <div class="form-review">
            <form>
              <div class="mb-3">
                <label for="inputName" class="form-label">Nama</label>
                <input name="inputName" type="text" class="form-control" id="inputName">
              </div>
              <div class="mb-3">
                <label for="inputReview" class="form-label">Reviews</label>
                <textarea name="inputReview" cols="10 " rows="10 " class="form-control" id="inputReview"></textarea>
              </div>
              <button id="submit-review" type="submit">Kirim</button>
            </form>
          </div>
      <div id="favoriteButtonContainer"></div>
      
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      resto: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
        city: detail.city,
      },
    });

    restoContainer.innerHTML += `
    <h2 tabindex="0">Reviews</h2>
    <div id="resto-review"></div>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });
    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' && reviewInput.value === '') {
        alert('Masukkan tidak boleh kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        Review(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;

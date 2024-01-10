import RestaurantSource from '../data/Restaurant-source';

const Review = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  RestaurantSource.PostResto(dataReview);

  const reviewContainer = document.querySelector('.review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const newReview = `
  <div class="review">
  <p>
  <span class="name">${name}</span> &bull; <span class="date">${date}</span>
  </p>
  <p>${review}</p>
  </div>`;

  reviewContainer.innerHTML += newReview;
};

export default Review;

import CONFIG from './config';

const API_ENDPOINT = {
  RESTO: `${CONFIG.BASE_URL}list`,
  RESTO_DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;

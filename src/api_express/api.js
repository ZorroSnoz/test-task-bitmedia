import * as axios from 'axios';

const instance = axios.create({ baseURL: 'https://localhost/2000/' });

const apiExpress = {
  getUsers(usersNumber, currentPage) {
    return instance.get(`users-data/${usersNumber}/${currentPage}`);
  }
};

export default apiExpress;
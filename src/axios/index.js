import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {'Authorization': 'Client-ID nVM0_E4p6fBvQjVTU0o4NDbqe-SWzrpGMyZ8V1G08uc'}
  });
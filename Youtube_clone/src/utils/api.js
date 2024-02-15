import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    method: 'GET',

    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'd6089bfc8amshab7217c1fc5fe97p1c5f72jsnc091cad80490',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};
export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


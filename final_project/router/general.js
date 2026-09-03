
const axios = require('axios');
const BASE_URL = 'http://localhost:5000';
async function getAllBooks() {
  const res = await axios.get(`${BASE_URL}/books`);
  return res.data;
}
function getBookByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/isbn/${isbn}`).then(r=>resolve(r.data)).catch(reject);
  });
}
async function getBooksByAuthor(author) {
  const res = await axios.get(`${BASE_URL}/author/${author}`);
  return res.data;
}
function getBooksByTitle(title) {
  return axios.get(`${BASE_URL}/title/${title}`).then(r=>r.data);
}
module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };

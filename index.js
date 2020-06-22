import './style.css';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter'

const input = document.querySelector('.form__input');
const btn = document.querySelector('#form__button');
const results = document.querySelector('.results');



const generateDatatoHTML = (data) => {
console.log(data)
data.forEach(book => {
  console.log(book.author.name)
  const li = document.createElement('li');
  const html = `<p>${book.author.name}</p>`
  li.innerHTML = html
  
  results.appendChild(li)
})
}

const fetchData = (search) => {
fetch(`${API_URL}`)
.then(response => response.json())
.then(data => {
  // console.log('Success:', data);
  generateDatatoHTML(data);
})
.catch((error) => {
  console.error('Error:', error.message);
});
}



btn.addEventListener('click', (e) =>{
  e.preventDefault()
  fetchData(input.value);
})
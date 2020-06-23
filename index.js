import './style.css';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q='

const input = document.querySelector('.form__input');
const btn = document.querySelector('#form__button');
const results = document.querySelector('.results');


const generateDatatoHTML = (data) => {
results.innerHTML = '';
data.forEach(book => {
  const li = document.createElement('li');
  
  const html = `
  <img src='${book.imageUrl}' alt='${book.bookTitleBare}' class='entry__image'/>
  <p class="entry__name-author">${book.author.name}</p>
  <p class="entry__name">${book.title}</p>
  <button class="btn__item"><a href="${book.description.fullContentUrl}">Read More</a></button>
  `

  li.innerHTML = html
  results.appendChild(li)
})
}

const fetchData = (search) => {
fetch(`${API_URL}${search}`)
.then(response => response.json())
.then(data => {
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
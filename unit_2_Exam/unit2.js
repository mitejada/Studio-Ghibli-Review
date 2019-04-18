document.addEventListener("DOMContentLoaded", () => {

  let body = document.querySelector('body')
  let selecter = document.querySelector('.select')
  let form = document.querySelector('.form')
  let review = document.querySelector('.review')
  let movies;
  let title = document.querySelector('#title')
  let releaseDate = document.querySelector('#releaseDate')
  let description = document.querySelector('#description')
  let input = document.getElementById('reviewAns')
  let displays = document.querySelector('.review')
  let submit = document.getElementById('reviewSubmit')

  function display() {

    fetch("https://ghibliapi.herokuapp.com/films/")
    .then(response => {
      return response.json()
    })
    .then(parseRes => {
      movies = parseRes

      for(let i = 0; i < movies.length; i++){
        let options = document.createElement('option')
        options.innerText = movies[i].title
        // options['src'] = movies[i].title
        options.setAttribute('value', [i])
        selecter.appendChild(options)
      }
    })
  }

  function displayInfo() {
    title.innerText = movies[selecter.value].title
    releaseDate.innerText = movies[selecter.value].release_date
    description.innerText = movies[selecter.value].description
  }

  function displayReview(event) {
    event.preventDefault()
    let list = document.createElement('li')
    list.innerText = input.value
    displays.appendChild(list, event)
  }

  display()

  submit.addEventListener('click', displayReview)

  selecter.addEventListener('change', () => {

    displayInfo()

  })


})

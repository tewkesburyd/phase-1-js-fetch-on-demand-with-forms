
const init = () => {
    const form = document.querySelector('form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const searchValue = document.querySelector('#searchByID')
        
        fetch(`http://localhost:3000/movies/${searchValue.value}`)
        .then(res => res.json())
        .then(movies => searchResults(movies))
})

}

const searchResults = movies => {
    const title = document.querySelector('#movieDetails h4')
    const summary = document.querySelector('#movieDetails p')
    const form = document.querySelector('form')

    title.innerText = movies.title
    summary.innerText = movies.summary
    form.reset()
}

//document.addEventListener('DOMContentLoaded', init);
init()
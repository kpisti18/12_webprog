const btn = document.querySelector('#fetch')

btn.addEventListener('click', fetchData)

async function fetchData() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await response.json()
    displayMeals(data.categories)
}

function displayMeals(categories) {
    const tarolo = document.querySelector('#tarolo')
    tarolo.innerHTML = ''

    categories.forEach(cat => {

        const card = document.createElement('div')
        card.className = 'card'

        const img = document.createElement('img')
        img.className = 'card-img'
        img.src = cat.strCategoryThumb
        img.alt = cat.strCategory

        const body = document.createElement('div')
        body.className = 'card-body'

        const title = document.createElement('h3')
        title.className = 'card-title'
        title.textContent = `Kategória: ${cat.strCategory}`

        body.append(title)
        card.append(img)
        card.append(body)
        tarolo.append(card)
    })
}
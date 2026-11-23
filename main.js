const url = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/bureaux-de-vote-2025/records?limit=100"
const list = document.querySelector('.cards')



const getdata = async() => {
    try {
        const result = await fetch(url)
        const data = await result.json()
        return data
    }
    catch(error){
        console.error(error);
    }
}


function displayCards(bureaux) {
    bureaux.forEach(bureau => {
        const card = createcard(bureau)
        list.appendChild(card)
    })
}


getdata().then(data =>{
    displayCards(data.results)
})

function createcard(data) {
    const article = document.createElement('article')
    article.classList.add('card')
          
    const name = document.createElement('h2')
    name.textContent = data.lib
           
    const local = document.createElement('p')
    local.classList.add('adress')
    local.textContent = data.adresse
           
    const postal = document.createElement('p')
    postal.classList.add('cp')
    postal.textContent = data.cp
           
    const numbers = document.createElement('p')
    numbers.classList.add('number')
    numbers.textContent = data.id_bv
           
    article.appendChild(name)
    article.appendChild(local)
    article.appendChild(postal)
    article.appendChild(numbers)
           
    return article
}
import createElements from './create-elements.js'

const fetchProperties = async(state_input) => {
    let city = ''
    let state = ''
    if (state_input ==='SP' || state_input ==='sao paulo' || state_input ==='sp' || state_input ==='São Paulo' || state_input ==='SAO PAULO' || state_input ==='SÃO PAULO') { 
        city = 'sao-paulo'
        state = 'sp'
    } 
    if (state_input ==='RJ' || state_input ==='rio de janeiro' || state_input ==='rj' || state_input ==='Rio de Janeiro' || state_input ==='RIO DE JANEIRO') {
        city = 'rio-de-janeiro'
        state = 'rj'
    }

    const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`
    const response = await fetch(url)
    const homeResponse = await response.json()
    const groupProperties = homeResponse.search.result.listings
    console.log(groupProperties)
    try { 
        createElements(groupProperties)
    } catch (err) {
        const error = document.querySelector('.error')
        error.style.display="block"
    }
}

export default fetchProperties
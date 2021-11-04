const createElements = (groupProperties) => {
    Promise.all(groupProperties)
                .then(properties => {
                    const button_city = 
                        `
                            ${properties[0].link.data.city} 
                            <img src="/public/delete-icon.svg" alt="icon-delete">
                        `
                    const button = document.querySelector('[data-js="btn"]')
                    button.innerHTML = button_city
    
                    const title_main = 
                        ` 
                            <h3>${properties.length}<h4>Imóveis à venda em ${properties[0].link.data.city} - ${properties[0].listing.address.stateAcronym}</h4></h3>
                            <button class="btn-city btn-blue" id="btn-blue">
                            ${properties[0].link.data.city} - ${properties[0].listing.address.stateAcronym}
                                <img src="/public/delete-icon.svg" alt="icon-delete">
                            </button>
                        `
                    const title = document.querySelector('[data-js="title-main"]')
                    title.innerHTML = title_main
    
                    const lisProperties = properties.reduce((acc, propertie) => { 
                        const location = propertie.link.data
                        acc += `
                            <li class="card">
                                <div class="area-image">
                                    <img src="${propertie.medias[0].url}" alt="">
                                </div>
                                <div class="area-text">
                                    <div>
                                        <p>${location.street}, ${location.streetNumber} - ${location.neighborhood}, ${location.city} - ${propertie.listing.address.stateAcronym}</p>
                                        <h4>${propertie.link.name}</h4>
                                        <ul class="infos">
                                            <li>${propertie.listing.usableAreas[0]} m²</li>
                                            <li>${propertie.listing.bedrooms[0]} Quarto(s)</li>
                                            <li>${propertie.listing.bathrooms[0] !== 0 ? `${propertie.listing.bathrooms[0]} Banheiro(s)`: 'Não possui banheiro'} </li>
                                            <li>${propertie.listing.parkingSpaces[0] !== 0 ? `${propertie.listing.parkingSpaces[0]} Vaga(s)` : 'Não possui vaga de estacionamento'} </li>
                                        </ul>
                                        <ul class="amenities">
                                            ${propertie.listing.amenities.reduce((acc, amenitie) => { 
                                                acc += `
                                                    <li>
                                                        ${amenitie}
                                                    </li>
                                                `
                                                return acc
                                            }, '')}
                                        </ul>
                                    </div>
                                    <footer>
                                        <div class="price">
                                            <h5>R$ ${propertie.listing.pricingInfos[0].price}</h5>
                                            <p>Condomínio: <span>R$ ${propertie.listing.pricingInfos[0].monthlyCondoFee}</span></p>
                                        </div>
                                        <div class="phone-mensage">
                                            <button>Telefone</button>
                                            <button>Enviar Mensagem</button>
                                        </div>
                                    </footer>
                                </div>
                            </li>
                        `
                        return acc
                    }, '')
                    const ul_properties = document.querySelector('[data-js="properties"]')
                    ul_properties.innerHTML = lisProperties
                })
}

export default createElements
import fetchProperties from "./fetch-properties.js";

const eventsListeners = () => {
    const inputElement = document.querySelector('#input-location');
    inputElement.addEventListener('focusout', function(event) { 
        event.preventDefault()
        fetchProperties(inputElement.value)
    })

    const btn = document.querySelector(".btn-city");
    btn.addEventListener("click", function() {
        location.reload();
    });
}

export default eventsListeners
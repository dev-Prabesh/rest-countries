let countriesContainer = document.querySelector(".countries-container");
let search = document.querySelector(".search")
let searchContainer = document.querySelector(".search-container")
let headerContainer = document.querySelector(".header-container")
let darkMode = document.querySelector(".dark-mode")
let body = document.querySelector("body")
let main = document.querySelector("main")
let countryCard = document.querySelector(".country-card")


countriesContainer.addEventListener("click",()=>{
    location.reload()
})

search.addEventListener("input", (e) => {
    console.log("")
    fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {
            countriesContainer.innerHTML = ""
            const filteredCountry = data.filter((country) =>
                country.name.common.toLowerCase().includes(e.target.value.toLowerCase())

            )
            console.log(showCountries)
            console.log(filteredCountry)
            console.log(filteredCountry[0].name.common)
            let countryCard = document.createElement("a")
            countryCard.classList.add("country-card")
            countryCard.href = `/country.html?name=${filteredCountry[0].name.common}`
            countryCard.innerHTML = `
                    <img src=${filteredCountry[0].flags.png} alt="flag" />
                    <div class="card-text">
                        <h3>${filteredCountry[0].name.common}</h3>
                        <p><b>Population:</b> ${filteredCountry[0].population.toLocaleString('en-IN')}</p>
                        <p><b>Region:</b> ${filteredCountry[0].region}</p>
                        <p><b>Capital:</b> ${filteredCountry[0].capital}</p>
                    </div>
                    `
            countriesContainer.append(countryCard)
        })
})


function showCountries() {
    fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {
            let count = 0;
            for (let datas of data) {
                let countryCard = document.createElement("a")
                countryCard.classList.add("country-card")
                countryCard.href = `/country.html?name=${data[count].name.common}`
                countryCard.innerHTML = `
                <img src=${data[count].flags.png} alt="flag" />
                <div class="card-text">
                    <h3>${data[count].name.common}</h3>
                    <p><b>Population:</b> ${data[count].population.toLocaleString('en-IN')}</p>
                    <p><b>Region:</b> ${data[count].region}</p>
                    <p><b>Capital:</b> ${data[count].capital}</p>
                </div>
                `
                countriesContainer.append(countryCard)
                count++
            }
        })


}
showCountries()

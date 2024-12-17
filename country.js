const countryName = new URLSearchParams(window.location.search).get("name");
const tobeappend = document.querySelector(".tobeappended");
const detailsSection = document.querySelector(".details-section");
const imgContainer = document.querySelector(".img-container");
const imgClass = document.querySelector(".flag-img");
const details = document.querySelector(".details");
const commonName = document.querySelector(".conName");
const countryDetails = document.querySelector(".country-details");
const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
let region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");
const borderText = document.querySelector(".border-text");
const buttonBack = document.querySelector(".button-back")

buttonBack.addEventListener("click",()=>{
    history.back();
})

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0].name);
        console.log(countryName)
        imgClass.src = `${data[0].flags.svg}`;
        commonName.innerText = `${data[0].name.common}`;
        if (data[0].name.nativeName) {
            nativeName.innerText = `${Object.values(data[0].name.nativeName)[0].common
                }`;
        } else {
            let para = document.createElement("p");
            para.innerText = `${data[0].name.common} has no nativeName.`;
            // .style.display = "flex"
            nativeName.append(para);
        }
        population.innerText = `${data[0].population.toLocaleString("en-IN")}`;
        region.innerText = `${data[0].region}`;
        if (data[0].subregion) {
            subRegion.innerText = `${data[0].subregion}`;
        } else {
            let para = document.createElement("p");
            para.innerText = `${data[0].name.common} has no subregion.`;
            // .style.display = "flex"
            subRegion.append(para);
        }
        if (data[0].capital) {
            capital.innerText = `${data[0].capital}`;
        } else {
            let para = document.createElement("p");
            para.innerText = `${data[0].name.common} has no capital.`;
            // .style.display = "flex"
            capital.append(para);
        }
        topLevelDomain.innerText = `${data[0].tld}`;
        if (data[0].currencies) {
            currencies.innerText = `${Object.values(data[0].currencies)[0].name}`;
        } else {
            let para = document.createElement("p");
            para.innerText = `${data[0].name.common} has no currencies.`;
            // currencies.style.display = "flex"
            currencies.append(para);
        }
        if (data[0].languages) {
            languages.innerText = `${Object.values(data[0].languages).join(", ")}`;
        } else {
            let para3 = document.createElement("p");
            para3.innerText = `${data[0].name.common} has no fixed languages.`;
            // currencies.style.display = "flex"
            languages.append(para3);
        }

        if (data[0].borders) {
            for (let i = 0; i < data[0].borders.length; i++) {
                fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data[0].borders)
                        fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`)
                            .then((res) => res.json())
                            .then((data) => {
                                const anchor = document.createElement("a");
                                anchor.classList.add("anchor");
                                anchor.href = `country.html?name=${data[0].name.common}`
                                anchor.innerHTML = data[0].name.common;
                                borderCountries.append(anchor);
                            });
                    });
            }
        } else {
            let para = document.createElement("p");
            para.innerText = `${data[0].name.common} has no borders.`;
            borderText.style.display = "flex";
            borderText.appendChild(para);
        }
    });













// fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data[0].borders)
//     fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[1]}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   });

// const borderCountries = document.querySelector(".border-countries");

// fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data[0])

//         const detailsSection = document.createElement("div")
//         detailsSection.classList.add("details-section")
//         detailsSection.innerHTML = `
//                 <div class="img-container">
//                   <img class="flag-img" src=${data[0].flags.png} />
//                 </div>

//                 <div class="details">
//                   <h1 class="conName">${data[0].name.common}</h1>

//                   <div class="country-details">
//                     <div class="part1">
//                     <p><b>Native Name:</b> <span class="nativeName"> ${Object.values(data[0].name.nativeName)[0].common}</span></p>
//                       <p><b>Population:</b> <span class="population"> ${data[0].population.toLocaleString('en-IN')}</span> </p>
//                       <p><b>Region:</b> <span class="region"></span> ${data[0].region}</p>
//                       <p><b>Sub Region:</b> <span class="sub-region"> ${data[0].subregion}</span> </p>
//                       <p><b>Capital:</b> <span class="capital"> ${data[0].capital[0]}</span></p>
//                     </div>
//                     <div class="part2">
//                       <p><b>Top Level Domain:</b> <span class="top-level-domain"> ${data[0].tld[0]}</span></p>
//                       <p><b>Currencies:</b> <span class="currencies">  ${Object.values(data[0].currencies)[0].name}</span></p>
//                       <p><b>Languages:</b> <span class="languages">  ${Object.values(data[0].languages).join(", ")}</span></p>
//                     </div>
//                   </div>

//                   <div class="border-countries">
//                     <a>
//                         <b>Border Countries:</b> ${data[0].borders.join(", ")}
//                     </a>
//                   </div>
//                 </div>
//         `

//         tobeappend.append(detailsSection)
//     })

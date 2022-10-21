const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
            <h3><small>Name:</small> ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
            <a href="#details-view"><button onclick="loadCountryDetails('${country.cca2}')">Details</button></a>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log('get country details', code);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
        <h2><small>Official Name:</small> ${country.name.official}</h2>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
    `;
}

loadCountries();
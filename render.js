const renderCountries = (countries, allData) => {
  document.querySelector('main').innerHTML = '';
  document.querySelector('.top').innerHTML = '';

  document.querySelector('.toast').style.display = 'none';
  if (!countries.length) {
    document.querySelector('.toast').style.display = 'flex';
  }
  countries.forEach((country) => singleCard(country, allData));
};

const renderCountry = (country, countriesData, setData) => {
  document.querySelector('main').innerHTML = '';
  document.querySelector('.top').innerHTML = '';
  countryInformation(country, countriesData, setData);
};

const BASE_URL = 'https://restcountries.com/v3.1/';

const request = axios.create({});

async function getCountry(name) {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return data[0];
  } catch (error) {
    console.error(error);
  }
}
async function getCountries(name) {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getByRegion(region) {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/region/${region}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getBySubRegion(subregion) {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/subregion/${subregion}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getByLanguage(currency) {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/lang/${currency}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getAll() {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/all`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getByCode(code) {
  try {
    const { data } = await request.request(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    return data[0];
  } catch (error) {
    console.error(error);
  }
}

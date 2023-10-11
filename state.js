const useSearch = () => {
  let state = '';

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};

const useRegion = () => {
  let state = '';

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};

const useCode = () => {
  let state = '';

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};

const countryState = () => {
  let country = {};
  const setState = (state) => {
    country = state;
  };
  const getState = () => state;
  return [getState, setState];
};

const allCountriesState = () => {
  let countries = [];
  const setState = (state) => {
    countries = state;
  };
  const getState = () => countries;
  return [getState, setState];
};

const countriesState = () => {
  let countries = [];
  const setState = (state) => {
    countries = state;
  };
  const getState = () => countries;
  return [getState, setState];
};

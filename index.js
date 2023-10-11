window.addEventListener('DOMContentLoaded', async () => {
  const data = await getAll();
  const [getAllData, setAllData] = allCountriesState();
  const [getCountries, setCountries] = countriesState();
  const [getSearch, setSearch] = useSearch();
  const [getRegion, setRegion] = useRegion();
  setAllData(data);
  setCountries(data.slice(0, 12));
  inputField(
    { textValue: getSearch(), selectValue: getRegion() },
    setCountries,
    setSearch,
    setRegion
  );
  const value = window.location.hash;
  if (value.length === 3) {
    const data = await getByCode(value.slice(1));
    renderCountry(data, getAllData(), setCountries);
  } else {
    renderCountries(getCountries());
    inputField(
      { textValue: getSearch(), selectValue: getRegion() },
      setCountries,
      setSearch,
      setRegion
    );
  }

  window.addEventListener('hashchange', async function (e) {
    const value = e.newURL.split('#').at(-1).trim();
    if (value.length === 3) {
      const data = await getByCode(value);
      renderCountry(data, getAllData(), setCountries);
    } else {
      if (value.includes('search')) {
        setRegion();
      }
      if (value.includes('subregion') || value.includes('region')) {
        setSearch();
      }
      if (value.includes('language')) {
        setRegion();
        setSearch();
      }
      renderCountries(getCountries());
      inputField(
        { textValue: getSearch(), selectValue: getRegion() },
        setCountries,
        setSearch,
        setRegion
      );
    }
  });
});

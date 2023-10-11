function inputField({ textValue, selectValue }, setData, setSearch, setRegion) {
  const search = createNode(
    {
      tag: 'div',
      classList: ['search'],
    },
    document.querySelector('.top')
  );

  const countrySearch = createNode(
    {
      tag: 'div',
      classList: ['countrySearch'],
    },
    search
  );

  createNode(
    {
      tag: 'img',
      src: './assets/search.svg',
      classList: ['searchIcon'],
    },
    countrySearch
  );

  const input = createNode(
    {
      tag: 'input',
      value: textValue,
      type: 'text',
    },
    countrySearch
  );

  input.addEventListener('change', async function (e) {
    const value = e.target.value;
    const data = await getCountries(value);
    setData(data);
    setSearch(value);
    window.location.hash = 'search_' + value;
  });

  const select = createNode(
    {
      tag: 'select',
      value: selectValue,
    },
    search
  );

  const regionsName = [
    'Filter by Region',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ];
  select.addEventListener('change', async function (e) {
    const value = e.target.value;
    const data = await getByRegion(value);
    setData(data);
    setRegion(value);
    window.location.hash = 'region_' + value;
    renderCountries(data);
  });

  regionsName.forEach((value) => {
    createNode({ tag: 'option', textContent: value, value }, select);
  });
  select.value = selectValue;
}

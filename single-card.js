function singleCard({ flags, name, population, region, capital, cca3 }) {
  const card = createNode(
    {
      tag: 'a',
      classList: ['card'],
      href: '#' + cca3,
    },
    document.querySelector('main')
  );

  createNode(
    {
      tag: 'img',
      classList: ['flag'],
      src: flags.png,
    },
    card
  );

  const cardData = createNode(
    {
      tag: 'div',
      classList: ['cardData'],
    },
    card
  );

  createNode(
    {
      tag: 'h4',
      classList: ['h4'],
      textContent: name.common,
    },
    cardData
  );

  const countryData = createNode(
    {
      tag: 'div',
      classList: ['countryData'],
    },
    cardData
  );

  const populationInfo = createNode(
    {
      tag: 'div',
      classList: ['populationInfo'],
    },
    countryData
  );
  createNode(
    {
      tag: 'p',
      textContent: 'Population:',
    },
    populationInfo
  );

  createNode(
    {
      tag: 'span',
      textContent: Intl.NumberFormat('de-DE').format(population),
    },
    populationInfo
  );

  const regionInfo = createNode(
    {
      tag: 'div',
      classList: ['regionInfo'],
    },
    countryData
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Region:',
    },
    regionInfo
  );

  createNode(
    {
      tag: 'span',
      textContent: region,
    },
    regionInfo
  );

  const capitalInfo = createNode(
    {
      tag: 'div',
      classList: ['capitalInfo'],
    },
    countryData
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Capital:',
    },
    capitalInfo
  );

  createNode(
    {
      tag: 'span',
      textContent: capital,
    },
    capitalInfo
  );
}

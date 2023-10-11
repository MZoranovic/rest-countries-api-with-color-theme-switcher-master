function countryInformation(
  {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  },
  countriesData,
  setData
) {
  const backButton = createNode(
    {
      tag: 'div',
      classList: ['backButton'],
    },
    document.querySelector('main')
  );

  createNode(
    {
      tag: 'a',
      classList: ['backBtn'],
      html: '&larr; Back',
      href: '#',
    },
    backButton
  );

  const countryPage = createNode(
    {
      tag: 'div',
      classList: ['countryPage'],
    },
    document.querySelector('main')
  );

  const flagImg = createNode(
    {
      tag: 'div',
      classList: ['flagImg'],
    },
    countryPage
  );

  createNode(
    {
      tag: 'img',
      src: flags.svg,
      classList: ['flags'],
    },
    flagImg
  );

  const details = createNode(
    {
      tag: 'div',
      classList: ['details'],
    },
    countryPage
  );

  createNode(
    {
      tag: 'h2',
      classList: ['h2'],
      textContent: name.common,
    },
    details
  );

  const countryDatas = createNode(
    {
      tag: 'div',
      classList: ['countryDatas'],
    },
    details
  );

  const leftPart = createNode(
    {
      tag: 'div',
      classList: ['leftPart'],
    },
    countryDatas
  );

  const nativeName = createNode(
    {
      tag: 'div',
      classList: ['nativeName'],
    },
    leftPart
  );
  createNode(
    {
      tag: 'p',
      textContent: 'Native Name:',
    },
    nativeName
  );

  createNode(
    {
      tag: 'p',
      textContent:
        Object.values(name.nativeName || {})[0]?.common || name.common,
      classList: ['lightText'],
    },
    nativeName
  );

  const populationData = createNode(
    {
      tag: 'div',
      classList: ['populationData'],
    },
    leftPart
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Population:',
    },
    populationData
  );

  createNode(
    {
      tag: 'p',
      textContent: Intl.NumberFormat('de-DE').format(population),
      classList: ['lightText'],
    },
    populationData
  );

  const regionData = createNode(
    {
      tag: 'div',
      classList: ['regionData'],
    },
    leftPart
  );

  regionData.addEventListener('click', async function (e) {
    const data = await getByRegion(region);
    setData(data);
    window.location.hash = '';
  });

  createNode(
    {
      tag: 'p',
      textContent: 'Region:',
    },
    regionData
  );

  createNode(
    {
      tag: 'div',
      textContent: region,
      classList: ['lightText'],
    },
    regionData
  );

  const subRegionData = createNode(
    {
      tag: 'div',
      classList: ['subRegionData'],
    },
    leftPart
  );

  subRegionData.addEventListener('click', async function (e) {
    const data = await getBySubRegion(subregion);
    setData(data);
    window.location.hash = '';
  });

  createNode(
    {
      tag: 'p',
      textContent: 'Sub Region:',
    },
    subRegionData
  );

  createNode(
    {
      tag: 'p',
      textContent: subregion || 'N/A',
      classList: ['lightText'],
    },
    subRegionData
  );

  const capitalData = createNode(
    {
      tag: 'div',
      classList: ['capitalData'],
    },
    leftPart
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Capital:',
    },
    capitalData
  );

  createNode(
    {
      tag: 'p',
      textContent: capital || 'N/A',
      classList: ['lightText'],
    },
    capitalData
  );

  const rightPart = createNode(
    {
      tag: 'div',
      classList: ['rightPart'],
    },
    countryDatas
  );

  const topLevDom = createNode(
    {
      tag: 'div',
      classList: ['topLevDom'],
    },
    rightPart
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Top Level Domain:',
    },
    topLevDom
  );

  createNode(
    {
      tag: 'p',
      textContent: tld?.[0] || 'N/A',
      classList: ['lightText'],
    },
    topLevDom
  );

  const currencieData = createNode(
    {
      tag: 'div',
      classList: ['currencieData'],
    },
    rightPart
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Currencies:',
    },
    currencieData
  );

  createNode(
    {
      tag: 'p',
      textContent: Object.values(currencies || {})[0]?.name ?? 'N/A',
      classList: ['lightText'],
    },
    currencieData
  );

  const languageData = createNode(
    {
      tag: 'div',
      classList: ['languageData'],
    },
    rightPart
  );

  createNode(
    {
      tag: 'p',
      textContent: 'Languages:',
    },
    languageData
  );

  const language = Object.values(languages || {});
  language.forEach((languages) => {
    const languages1 = createNode(
      {
        tag: 'p',
        textContent: languages,
        classList: ['lightText'],
      },
      languageData
    );
    languages1.addEventListener('click', async function (e) {
      const data = await getByLanguage(languages);
      setData(data);
      window.location.hash = 'language_' + languages;
    });
  });

  const border = createNode(
    {
      tag: 'div',
      classList: ['borderCountries'],
      textContent: 'Border Countries:',
    },
    details
  );

  const li = createNode(
    {
      tag: 'div',
    },
    border
  );
  if (borders) {
    borders?.forEach((border1) => {
      createNode(
        {
          tag: 'a',
          textContent: countriesData.find(({ cca3 }) => cca3 === border1).name
            .common,
          classList: ['borders'],
          href: '#' + border1,
        },
        li
      );
    });
  } else {
    createNode(
      {
        tag: 'a',
        textContent: 'N/A',
        classList: ['noData'],
        href: '#',
      },
      li
    );
  }
}

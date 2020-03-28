const mapCountryName = name => {
  const CountryName = {
    Australia: '澳大利亚',
    America: '美国',
    China: '中国',
    Italy: '意大利'
  };
  return CountryName[name];
};

const mapMonthName = name => {
  const CountryName = {
    1: '1月: ',
    2: '2月: ',
    3: '3月: ',
  };
  return CountryName[name];
};

const divideByMonth = data => {
  let monthData = new Map();
  for (const [key, value] of Object.entries(data)) {
    let keySplitList = key.split('/');
    monthData.set(keySplitList[0], value);
  }
  return monthData;
};

export { mapCountryName, mapMonthName, divideByMonth };

const mapCountryCnName = name => {
  const CountryName = {
    Australia: '澳大利亚',
    America: '美国',
    China: '中国',
    Italy: '意大利',
    Japan: '日本'
  };
  return CountryName[name];
};

const mapCountryEnName = name => {
  const CountryName = {
    澳大利亚: 'Australia',
    美国: 'America',
    中国: 'China',
    意大利: 'Italy',
    日本: 'Japan'
  };
  return CountryName[name];
};

const mapMonthName = name => {
  const CountryName = {
    1: '1月: ',
    2: '2月: ',
    3: '3月: ',
    4: '4月: ',
    5: '5月: ',
    6: '6月: ',
    7: '7月: ',
    8: '8月: ',
    9: '9月: ',
    10: '10月: ',
    11: '11月: ',
    12: '12月: '
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

export { mapCountryCnName, mapMonthName, divideByMonth, mapCountryEnName };

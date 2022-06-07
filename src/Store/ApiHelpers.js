export const parseUrlQuery = filter => {
  let result = '';
  for (const [key, value] of Object.entries(filter)) {
    console.log('key here',key)
    if(key === 'price' && (value[0] !== 0  ||  value[1] !== 1000))
    {
      result += `price_gte=${value[0]}&price_lte=${value[1]}&`;
    } else if (key !== 'price' && value && value !== undefined && value !== null && value !== -1 && value !== '' && value?.length !== 0 && value !== 'All')
      result += `${[key]}=${value}&`;
  }

  result = `?${result}`;
  result = result.substr(0, result.length - 1);
  return result;
};
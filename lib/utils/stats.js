/**
 * 
 * @param { object } jsonLinks 
 * 
 * @returns { array } array de links unicos
 * 
 * 
 */

export const filtrarLinksUnicos = (jsonLinks) => {
  const arrayUrl = jsonLinks.reduce((acum, ele) => {
    acum.push(ele.href);
    return acum;
  }, []);
  const uniqueLinks = arrayUrl.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });

  return uniqueLinks;
};
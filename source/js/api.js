const SPECIALTY_NUMBER = 5;
const MODULE_NUMBER = 2;
const ITEM_NUMBER = 5;

const getData = (onSuccess, onError) => {
  return fetch('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses')
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error(`${responce.status} ${responce.statusText}`);
    })
    .then(onSuccess)
    .catch(onError);
};

getData((res) => console.log(typeof res), (err) => console.log(err));

const renderSpecialty = (data) => {

};

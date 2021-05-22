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

export { getData };

const Model = {
  get: (url, cb) => {
    return fetch(url)
      .then(response => response.json())
      .then(cb);
  }
};

export default Model;

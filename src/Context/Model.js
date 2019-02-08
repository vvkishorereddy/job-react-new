const Model = {
  get: (url, cb) => {
    return fetch(url)
      .then(response => response.json())
      .then(cb)
      .catch(err => {
        console.log(err);
      });
  },
  post: (url, data, cb) => {
    return fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(cb);
  }
};

export default Model;

// created a promise which returns a message

const myPromise = () => {
    return new Promise((resolve, reject) => {
      const message = "This is a message from a promise!";
      resolve(message);
    });
  };
  
  myPromise().then((message) => {
    console.log(message);
  });
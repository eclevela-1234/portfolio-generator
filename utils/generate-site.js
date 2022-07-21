const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      //if there's an error, reject the promise and send the error to the promise's catch method
      if (err) {
        reject(err);
        // return out of the function here to make sur the promise doesn't axxidentally execute the resolve() function.
        return;
      }
      // if everything went well, resolve the promise and send the successful data to the .then method

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const generator = require("generate-password");

const password = generator.generate({
  length: 50,
  numbers: true,
});

console.log(password);

const cowsay = require('cowsay');
const personData = require('./information');

console.log(cowsay.say({ text: `Hello, my name is ${personData.name} and I'm from ${personData.campus}`, e: '-O', T: 'U' }));

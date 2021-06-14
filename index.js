const personData = require('./information.js')
const cowsay = require('cowsay')

console.log(cowsay.say({text:`Hello, my name is ${personData.name} and I'm from ${personData.campus}`, e: '-O', T:'U'}))
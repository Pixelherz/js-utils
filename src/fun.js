const randItem = require('./array').randItem

/**
 * Prints a project signature to the console. Pass data from package.json
 * (ie. require('./package.json')) or a custom data object.
 *
 * @param {object} pkgObj - Object, signature: {
 *   name: 'project name',
 *   version: '1.4.1',
 *   description: 'project description',
 *   author: {
 *     name: 'author name',
 *     email: 'author@email.com',
 *     url: 'https://author.url',
 *   },
 * }
 */
const signConsole = ({ name, version, description, author }) => {
  const authorTagLines = [
    `homegrown 🌱 by ${author.name}, ${author.url}`,
    `manufactured with ❤️ by ${author.name}, ${author.url}`,
    `magic 🦄 added by ${author.name}, ${author.url}`,
    `report 🐛 to ${author.email} - ${author.name}, ${author.url}`,
    `first seen 🌈 at ${author.name}, ${author.url}`,
    `grown 🍄 by ${author.name}, ${author.url}`,
    `with extra 🍒 flavour added by ${author.name}, ${author.url}`,
    `may contain traces of 🥑 - ${author.name}, ${author.url}`,
    `${author.name} ❤️ you - ${author.url}`,
  ]
  console.log(`\n
    ${name} ${version}
    ${description}
    ${randItem(authorTagLines)}\n \n `)
}

module.exports = {
  signConsole,
}

/**
 * Returns a random item from a given array
 * @param {array} arr
 */
const randItem = arr => arr[Math.floor(Math.random() * arr.length)]

module.exports = {
  randItem,
}

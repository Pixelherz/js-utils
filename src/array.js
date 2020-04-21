/**
 * Returns string values from a given array as space separated string to be
 * used as class names.
 * @param {array} classNames
 */
const arrToClassName = classNames =>
  classNames.filter(className => className).join(' ')

/**
 * Returns a random item from a given array
 * @param {array} arr
 */
const randItem = arr => arr[Math.floor(Math.random() * arr.length)]

module.exports = {
  arrToClassName,
  randItem,
}

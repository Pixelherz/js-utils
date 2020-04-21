/**
 * Returns a hash from a given string
 * @param {String} str
 */
const strToHash = str => {
  let hash = 0,
    i,
    chr
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

module.exports = {
  strToHash,
}

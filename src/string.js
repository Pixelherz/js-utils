/**
 * Truncates a given string to a given max length and appends a given string at
 * the end.
 * @param {string} string String to be truncated
 * @param {number} maxLength Max length of the truncated string
 * @param {string} append String to be appended to the truncated string
 */
const wordbreakTruncate = (string, maxLength = 140, append = '') => {
  if (maxLength >= string.length) {
    return string
  }
  let truncated = string.substr(0, maxLength + 1)
  const end = truncated.lastIndexOf(' ')
  truncated = truncated.substr(0, end)
  const appendix = truncated.length < string.length ? append : ''
  return truncated + appendix
}

/**
 * Returns a hash from a given string.
 * @param {string} str
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
  wordbreakTruncate,
  strToHash,
}

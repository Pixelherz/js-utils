/**
 * Strip HTML tags from string
 * @param {string} str - string with markup
 * @return {string} - clean string
 */
const stripHtml = str => str.replace(/<(?:.|\n)*?>/gm, '')

module.exports = {
  stripHtml,
}

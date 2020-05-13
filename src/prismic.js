const wordbreakTruncate = require('./string').wordbreakTruncate

/**
 * Truncates a given Prismic richtext to a given max length and appends a given
 * string at the end.
 * NOTE: Only the first element in the richtext object is truncated and
 * returned.
 * @param {object} richText Prismic richtext to be truncated
 * @param {number} maxLength Max length of the truncated string
 * @param {string} append String to be appended to the truncated string
 */
const wordbreakTruncateRichText = (richText, maxLength, append = '') => {
  if (!richText[0]) return richText
  const { spans, text, type } = richText[0]
  const truncated = wordbreakTruncate(text, maxLength, append)
  const filteredSpans = []
  spans.forEach(item => {
    item.end = Math.min(truncated.length - append.length, item.end)
    if (item.start < truncated.length) {
      filteredSpans.push(item)
    }
  })
  return [{ spans: filteredSpans, text: truncated, type }]
}

module.exports = {
  wordbreakTruncateRichText,
}

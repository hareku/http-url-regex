const scheme = /https?:\/\//
const domain = /(?:[a-z\u00a1-\uffff0-9][-_.]*)*\.+[a-z\u00a1-\uffff0-9]+/
const path = /([/?#][^\s"]*)?/
const url = new RegExp(`${scheme.source}${domain.source}${path.source}`)

module.exports = {
  scheme,
  domain,
  path,
  url
}

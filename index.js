var scheme = /https?:\/\//
var domain = /(?:[a-z\u00a1-\uffff0-9][-_.]*)*\.+[a-z\u00a1-\uffff0-9]+/
var path = /([/?#][^\s"]*)?/
var url = new RegExp(scheme.source + domain.source + path.source)

module.exports = {
  scheme: scheme,
  domain: domain,
  path: path,
  url: url
}

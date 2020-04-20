var scheme = /https?:\/\//
var domain = /(?:[a-z\u00a1-\uffff0-9][-_.]*)*\.+[a-z\u00a1-\uffff0-9]+/
var path = /([/?#][^\s"]*)?/
var url = new RegExp(scheme.source + domain.source + path.source)
var url_no_scheme = new RegExp(domain.source + path.source)

module.exports = {
  scheme: scheme,
  domain: domain,
  path: path,
  url: url,
  url_no_scheme: url_no_scheme
}

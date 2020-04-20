var scheme = /https?:\/\//
var domain = /(?:[a-zA-Z0-9][-.]*)*\.+[a-zA-Z]+/
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

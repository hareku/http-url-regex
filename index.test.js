const { scheme, url, url_no_scheme } = require('./index')

describe('scheme regex', function() {
  it('matches http schemes', () => {
    const fixtures = [
      'http://',
      'https://',
    ]

    fixtures.forEach(function(fixture) {
      expect((new RegExp(`^${scheme.source}$`)).test(fixture)).toBe(true)
    })
  })

  it('does not matche non http schemes', () => {
    const fixtures = [
      'tcp://',
      'http:/',
      'http://example.com',
    ]

    fixtures.forEach(function(fixture) {
      expect((new RegExp(`^${scheme.source}$`)).test(fixture)).toBe(false)
    })
  })
})

describe('url regex', function() {
  it('matches correct http URLs', () => {
    const fixtures = [
      'http://example.com',
      'https://example.com',
      'https://ex-ample.com',
      'http://www.example.com',
      'http://www.sub.example.com',
      'http://example.com?foo=bar',
      'http://example.com#foo',
      'http://example.com#foo?foo=bar',
      'http://example.com/@me',
      'http://example.com/@me/info',
    ]

    fixtures.forEach(function(fixture) {
      expect((new RegExp(`^${url.source}$`)).test(fixture)).toBe(true)
    })
  })

  it('does not match non http URLs', () => {
    const fixtures = [
      'https://example',
      'https://example.123',
      'https://ex_ample.com',
      'https://example.com\n',
      'http://漢字.com',
      'http://ひらがな.com',
      'https://example a',
      '://example.com',
      'example.com',
      'ftp://example.com',
    ]

    fixtures.forEach(function(fixture) {
      expect((new RegExp(`^${url.source}$`)).test(fixture)).toBe(false)
    })
  })
})

describe('url_no_scheme regex', function() {
  it('matches URLs without scheme', () => {
    const fixtures = [
      'example.com',
      'www.example.com',
      'example.com/path',
    ]

    fixtures.forEach(function(fixture) {
      expect((new RegExp(`^${url_no_scheme.source}$`)).test(fixture)).toBe(true)
    })
  })
})

const { scheme, url } = require('./index')

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
      'http://www.example.com',
      'http://www.sub.example.com',
      'http://example.com?foo=bar',
      'http://example.com#foo',
      'http://example.com#foo?foo=bar',
      'http://example.com/@me',
      'http://example.com/@me/info',
      'http://漢字.com',
      'http://ひらがな.com',
    ]

    fixtures.forEach(function(fixture) {
      expect((new RegExp(`^${url.source}$`)).test(fixture)).toBe(true)
    })
  })

  it('does not match non http URLs', () => {
    const fixtures = [
      'https://example',
      'https://example.com\n',
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

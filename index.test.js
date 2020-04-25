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
    const urlRegex = new RegExp(`^${url.source}$`)

    expect(urlRegex.test('http://ab.com')).toBe(true)
    expect(urlRegex.test('http://abc.co.jp')).toBe(true)
    expect(urlRegex.test('http://abc.def.co.jp')).toBe(true)
    expect(urlRegex.test('http://example.com')).toBe(true)
    expect(urlRegex.test('https://example.com')).toBe(true)
    expect(urlRegex.test('https://ex-ample.com')).toBe(true)
    expect(urlRegex.test('http://www.example.com')).toBe(true)
    expect(urlRegex.test('http://www.sub.example.com')).toBe(true)
    expect(urlRegex.test('http://example.com?foo=bar')).toBe(true)
    expect(urlRegex.test('http://example.com#foo')).toBe(true)
    expect(urlRegex.test('http://example.com#foo?foo=bar')).toBe(true)
    expect(urlRegex.test('http://example.com/@me')).toBe(true)
    expect(urlRegex.test('http://example.com/@me/info')).toBe(true)
  })

  it('does not match non http URLs', () => {
    const urlRegex = new RegExp(`^${url.source}$`)

    expect(urlRegex.test('https://example')).toBe(false)
    expect(urlRegex.test('https://a.com')).toBe(false)
    expect(urlRegex.test('https://1.example.com')).toBe(false)
    expect(urlRegex.test('https://.example.com')).toBe(false)
    expect(urlRegex.test('https://example..com')).toBe(false)
    expect(urlRegex.test('https://example-.com')).toBe(false)
    expect(urlRegex.test('https://exampl\\e.com')).toBe(false)
    expect(urlRegex.test('https://example.123')).toBe(false)
    expect(urlRegex.test('https://ex_ample.com')).toBe(false)
    expect(urlRegex.test('https://example.com\n')).toBe(false)
    expect(urlRegex.test('http://漢字.com')).toBe(false)
    expect(urlRegex.test('http://ひらがな.com')).toBe(false)
    expect(urlRegex.test('https://example a')).toBe(false)
    expect(urlRegex.test('://example.com')).toBe(false)
    expect(urlRegex.test('example.com')).toBe(false)
    expect(urlRegex.test('ftp://example.com')).toBe(false)
  })
})

describe('url_no_scheme regex', function() {
  it('matches URLs that does not have http-scheme', () => {
    const urlNoSchemeRegex = new RegExp(`^${url_no_scheme.source}$`)

    expect(urlNoSchemeRegex.test('example.com')).toBe(true)
    expect(urlNoSchemeRegex.test('example.com/path')).toBe(true)
    expect(urlNoSchemeRegex.test('www.example.com')).toBe(true)
  })

  it('does not matche non-correct-URLs', () => {
    const urlNoSchemeRegex = new RegExp(`^${url_no_scheme.source}$`)

    expect(urlNoSchemeRegex.test('.https')).toBe(false)
    expect(urlNoSchemeRegex.test('.example.com')).toBe(false)
    expect(urlNoSchemeRegex.test('.www.example.com')).toBe(false)
    expect(urlNoSchemeRegex.test('https://example.com')).toBe(false)
  })
})

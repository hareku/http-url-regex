const { scheme, url } = require('./index')

test('matches scheme', function() {
  const fixtures = [
		'http://',
		'https://',
  ]

  fixtures.forEach(function(fixture) {
    expect(scheme.test(fixture)).toBe(true)
  })
})

test('matches url', function() {
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

test('does not matche url', function() {
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

test('removes url scheme', () => {
  const input = 'This is my site: https://example.com'
  expect(input.replace(url, function(match) {
    return match.replace(new RegExp(scheme), '')
  })).toBe('This is my site: example.com')
})

test('removes two url schemes', () => {
  const input = 'https://example.com\nand https://blog.example.com'
  expect(input.replace(new RegExp(url, 'ig'), function(match) {
    return match.replace(new RegExp(scheme), '')
  })).toBe('example.com\nand blog.example.com')
})

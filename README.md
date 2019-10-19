# http-url-regex

A lightweight regular expression library for HTTP URLs.

- Less than **300 Bytes**
- Only `http` or `https`
- Support TypeScript

## Installation

`yarn add http-url-regex`

## Usage

You can use these regular expressions.

- `url` (`scheme` + `domain` + `path`)
- `scheme`
- `domain`
- `path`

```js
const urlRegex = require('http-url-regex')

urlRegex.url.test('http://example.com')
//=> true

urlRegex.url.test('http://example.com/@me')
//=> true

urlRegex.url.test('http://undefined')
//=> false

urlRegex.scheme.test('http://')
//=> true

urlRegex.scheme.test('https://')
//=> true

urlRegex.scheme.test('ftp://')
//=> false

urlRegex.domain.test('example.com')
//=> true

urlRegex.domain.test('www.example.com')
//=> true

urlRegex.domain.test('example')
//=> false

urlRegex.path.test('/@me')
//=> true
```

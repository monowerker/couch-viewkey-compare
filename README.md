### couch-viewkey-compare

#### Purpose

Implements CouchDB [view-key collation](http://docs.couchdb.org/en/latest/couchapp/views/collation.html#collation-specification) in an compare function.

#### Like

```javascript
var compare = require('couch-viewkey-compare');

console.log(compare(['a'], ['b'])); // -1
console.log(compare(['b', 'c', 'a'], ['b', 'c'])); // 1
console.log(compare(['b', 'd'], [1, 'd', 'e'])); // 1
console.log(compare(['a'], ['a'])); // 0

```

#### License

Copyright (c) 2015, Daniel Ericsson

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

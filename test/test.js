var assert = require('better-assert');
var compare = require('../');

/**
 * Tests are derived from documentation at http://docs.couchdb.org/en/latest/couchapp/views/collation.html
 */
describe('Comparison function implementing CouchDB view-key collation', function() {
    it('Should sort special values before all other types', function() {
      assert(compare(null, 0) == compare.ascending);
      assert(compare(false, 0) == compare.ascending);
      assert(compare(true, 'asdf') == compare.ascending);
    });

    it('Should sort numbers after special types but before strings', function() {
      assert(compare(1, null) == compare.descending);
      assert(compare(2, false) == compare.descending);
      assert(compare(3, true) == compare.descending);

      assert(compare(1, 'abc') == compare.ascending);
      assert(compare(2, 'def') == compare.ascending);
      assert(compare(3, 'ghi') == compare.ascending);
    });

    it('Should sort strings case sensitive', function() {
      assert(compare('a', 'A') == compare.ascending);
      assert(compare('a', 'aa') == compare.ascending);
      assert(compare('B', 'ba') == compare.ascending);
    });

    it('Should sort arrays element by element', function() {
      assert(compare(['a'], ['b']) == compare.ascending);
      assert(compare(['b', 'c', 'a'], ['b', 'c']) == compare.descending);
      assert(compare(['b', 'd'], [1, 'd', 'e']) == compare.descending);
      assert(compare(['a'], ['a']) == compare.same);
    });

    it('Should sort objects by key value', function() {
      assert(compare({a:1}, {a:2}) == compare.ascending);
      assert(compare({b:1}, {b:2}) == compare.ascending);
      assert(compare({b:2, a:1}, {b:2, c:2}) == compare.ascending);
    });
});

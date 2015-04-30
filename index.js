function viewKeyCompare(key1, key2) {
    this.ascending = -1;
    this.same = 0;
    this.descending = 1;

    var valOrder = numberOrder(typeOrder(key1), typeOrder(key2));

    if (valOrder !== same) {
        return valOrder;
    } else {
        if ((typeOrder(key1) === 1) && (typeOrder(key2) === 1)) {
            return same;
        }

        if ((typeof key1 === 'number') && (typeof key2 === 'number')) {
            return numberOrder(key1, key2);
        }

        if ((typeof key1 === 'string') && (typeof key2 === 'string')) {
            var collationOpts = {
                caseFirst: 'lower'
            };
            var stringCompare = new Intl.Collator('en', collationOpts).compare;

            return stringCompare(key1, key2);
        }

        if (key1 instanceof Array && key2 instanceof Array) {
            var i = 0;
            var o = same;
            while (o === same) {
                e1 = key1[i];
                e2 = key2[i];
                if (typeof e1 === 'undefined' && typeof e2 === 'undefined') {
                    return o; // same at last element
                }

                o = viewKeyCompare(e1, e2);
                ++i;
            }

            return o;
        }

        if (((key1 instanceof Object) && !(key1 instanceof Array)) &&
            ((key2 instanceof Object) && !(key2 instanceof Array))) {
            var keyOrder = viewKeyCompare(Object.keys(key1), Object.keys(key2));
            if (keyOrder === same) {
                for (var key in key1) {
                    var v1 = key1[key];
                    var v2 = key2[key];

                    keyOrder = viewKeyCompare(v1, v2);
                }
            }

            return keyOrder;
        }
    }
}

function numberOrder(x, y) {
    var d = x - y;
    var order;
    if (d === 0) {
        order = same;
    } else if (d < 0) {
        order = ascending;
    } else if (d > 0) {
        order = descending;
    }

    return order;
}

function typeOrder(aThing) {
    if (typeof aThing === 'undefined') {
        return 0;
    }

    if ((aThing === null) ||
        (typeof aThing === 'boolean')) {
        return 1;
    }

    if (typeof aThing === 'number') {
        return 2;
    }

    if (typeof aThing === 'string') {
        return 3;
    }

    if (aThing instanceof Array) {
        return 4;
    }

    if (aThing instanceof Object &&
        !(aThing instanceof Array)) {
        return 5;
    }
}

module.exports = exports = viewKeyCompare;
module.exports.ascending = -1;
module.exports.descending = 1;
module.exports.same = 0;


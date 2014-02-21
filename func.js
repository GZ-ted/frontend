//obj{attr1:[1, 2, 3], attr2:[a, b ,c]} -> obj[{attr1:1, attr2:a}, {attr1:2, attr2:b}, ...]
    function rev(obj) {
        var key = [], val = [], i = j = kLen = vLen = 0, ret = [];

        for (i in obj) {
            key.push(i);
            val.push(obj[i]);
            kLen++;
            !vLen && (vLen = obj[i].length);
        }
        for (; j < vLen; j++) {
            var temp = {};
            for (var m = 0; m < kLen; m++) {
                temp[key[m]] = val[m][j];
            }
            ret.push(temp);
        }

        return ret;
    }

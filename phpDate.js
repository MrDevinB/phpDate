function phpDate(str, dt) {

    var out = '',
        A = new Date(),
        dt = (typeof dt == 'undefined') ? A : (typeof dt == 'object')? dt : new Date( Date.parse(dt) ),
        str = (typeof str != 'undefined' && str != '') ? str : 'Y-m-d H:i:s',
        a = str.split(''),
        c = dt.getFullYear() / 4,
        ly = (c == Math.floor(c)),
        _M = {
            f: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            s: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            l: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            c: [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
        },
        _D = {
            f: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            s: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        d = {
            d: function() { /* Day of the month, 2 digits with leading zeros - 01 to 31 */
                return ('0' + dt.getDate().toString()).slice(-2);
            },
            j: function() { /* Day of the month without leading zeros - 1 to 31*/
                return dt.getDate();
            },
            D: function() { /* A textual representation of a day, three letters - Mon through Sun */
                return _D.s[dt.getDay()];
            },
            l: function() { /* A full textual representation of the day of the week - Sunday through Saturday */
                return _D.f[dt.getDay()];
            },
            w: function() { /* Numeric representation of the day of the week - 0 (for Sunday) through 6 (for Saturday) */
                return dt.getDay();
            },
            z: function() { /* The day of the year (starting from 0) */
                var B = dt.getMonth() - 1,
                    C = (B > 0) ? _M.c[B] : 0;
                C += dt.getDate();
                C += (ly) ? 1 : 0;
                return C;
            },
            F: function() { /* A full textual representation of a month, such as January or March - January through December */
                return _M.f[dt.getMonth()];
            },
            m: function() { /* Numeric representation of a month, with leading zeros - 01 through 12 */
                return ('0' + (dt.getMonth() + 1).toString()).slice(-2);
            },
            M: function() { /* A short textual representation of a month, three letters */
                return _M.s[dt.getMonth()];
            },
            n: function() { /* Numeric representation of a month, without leading zeros */
                return dt.getMonth() + 1;
            },
            t: function() { /* Number of days in the given month */
                return (dt.getMonth() == 1 && ly) ? '29' : _M.l[dt.getMonth()];
            },
            L: function() { /* Whether it's a leap year - True of False */
                return ly;
            },
            Y: function() { /* A full numeric representation of a year, 4 digits - Examples: 1999 or 2003 */
                return dt.getFullYear();
            },
            y: function() { /* A two digit representation of a year - Examples: 99 or 03 */
                return dt.getFullYear().toString().substring(2, 4);
            },
            a: function() { /* Lowercase am or pm */
                return (dt.getHours() >= 11) ? 'pm' : 'am';
            },
            A: function() { /* Uppercase AM or PM */
                return (dt.getHours() >= 11) ? 'PM' : 'AM';
            },
            g: function() { /* 12-hour format of an hour without leading zeros - 1 to 12 */
                var A = dt.getHours();
                return (A > 12) ? A - 12 : (A == 0) ? 12 : A;
            },
            G: function() { /* 24-hour format of an hour without leading zeros - 0 to 23 */
                return dt.getHours();
            },
            h: function() { /* 12-hour format of an hour with leading zeros - 01 to 12 */
                var A = dt.getHours();
                return ('0' + ((A > 12) ? A - 12 : (A == 0) ? 12 : A).toString()).slice(-2);
            },
            H: function() { /* 24-hour format of an hour with leading zeros - 00 to 23 */
                return ('0' + (dt.getHours()).toString()).slice(-2);
            },
            i: function() { /* Minutes with leading zeros - 00 to 59 */
                return ('0' + (dt.getMinutes()).toString()).slice(-2);
            },
            s: function() { /* Seconds, with leading zeros - 0 to 59 */
                return ('0' + (dt.getSeconds()).toString()).slice(-2);
            }
        };

    if( dt == 'Invalid Date')
      return dt;

    for (i = 0; i < a.length; i++)
        out += (typeof d[a[i]] == 'function') ? d[a[i]]() : a[i];

    return out;
}
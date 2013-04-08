phpDate
=======

Javascript function for easy date formatting. Based on the php date function.

Usage: 

By default, with function will return the Date in the following format.

  2013-04-08 12:35:12

Function takes in two optional variables:
  str: String format for date. i.e. 'Y-m-d H:i:s'
  dt: Date object to use instead of current date/time

List of available string items and what they will return:

  Day-
    d: Day of the month, 2 digits with leading zeros - 01 to 31
    j: Day of the month without leading zeros - 1 to 31
    D: A textual representation of a day, three letters - Mon through Sun
    l: (lowercase L) A full textual representation of the day of the week - Sunday through Saturday
    w: Numeric representation of the day of the week - 0 (for Sunday) through 6 (for Saturday)
    z: The day of the year (starting from 0)
  
  Month-
    F: A full textual representation of a month, such as January or March
    m: Numeric representation of a month, with leading zeros
    M: A short textual representation of a month, three letters
    n: Numeric representation of a month, without leading zeros
    t: Number of days in the given month
  
  Year-
    L: Whether it's a leap year - True of False
    Y: A full numeric representation of a year, 4 digits - Examples: 1999 or 2003
    y: A two digit representation of a year - Examples: 99 or 03
  
  Time-
    a: Lowercase am or pm
    A: Uppercase AM or PM
    g: 12-hour format of an hour without leading zeros - 1 to 12
    G: 24-hour format of an hour without leading zeros - 0 to 23
    h: 12-hour format of an hour with leading zeros - 01 to 12
    H: 24-hour format of an hour with leading zeros - 00 to 23
    i: Minutes with leading zeros - 00 to 59
    s: Seconds, with leading zeros - 0 to 59


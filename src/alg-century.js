function century(year) {
    // v1
    //return Math.ceil(year / 100);
    
    // v2 with bitwise
    // const val = (year + 99) / 100; //?
    // return val | 0; //?

    // v3
    // return year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1

    // v4
    var century = 0;
    for(var i = 0; i < year; i++) {
        if(i % 100 == 0) {
        century++;
        }
    }
    return century;
}

  century(1705) === 18 /*?*/
  century(1900)  === 19 /*?*/
  century(1601) === 17 /*?*/
  century(89) === 1 /*?*/
  century(100) === 1 /*?*/
  century(200) === 2 /*?*/
  century(201) === 3 /*?*/
  century(299) === 3 /*?*/

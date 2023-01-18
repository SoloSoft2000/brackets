module.exports = function check(str, bracketsConfig) {
  // your solution
  let openS = Object.fromEntries(bracketsConfig)
  let closeS = Object.fromEntries(
      Object.entries(openS)
            .map(([key,value])=>[value,key]))

  myStr=""
  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if(Object.keys(openS).includes(element)) { // откр скобка
      if(Object.keys(closeS).includes(element)) { // если одинаково
        if(myStr.slice(-1)===closeS[element]) {
          myStr = myStr.slice(0, -1)
        } else {
          myStr += element;
        }

      } else {
       myStr += element;
    }
    } else {
      if(Object.keys(closeS).includes(element)) {// закр скобка
        if(myStr.slice(-1)===closeS[element]) {
          myStr = myStr.slice(0, -1)
        } else {
          return false;
        }
      }
    }
  }
  return myStr.length>0 ? false :true
}

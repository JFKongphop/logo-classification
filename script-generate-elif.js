var fs = require('fs').promises;

let ifelse = '';

for (let i = 0; i < a.length; i++) {
  if (i === 0) {
    ifelse += `if (l == "${a[i]}"):\n`
    list_zero = []
    for (let j = 0; j < a.length; j++) {
      if (i === j) {
        list_zero.push(1)
      }
      else {
        list_zero.push(0)
      }
    }
    ifelse += `    labels.append([${list_zero}])\n`
  }
  else {
    ifelse += `elif (l == "${a[i]}"):\n`
    list_zero = []
    for (let j = 0; j < a.length; j++) {
      if (i === j) {
        list_zero.push(1)
      }
      else {
        list_zero.push(0)
      }
    }
    ifelse += `    labels.append([${list_zero}])\n`
  }
}

fs.writeFile('aaaa.txt', ifelse, function (err) {
  if (err) throw err;
  console.log('Updated!');
});

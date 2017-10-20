
function translateNumber(num) {
  let translatedNum = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i].match(/[A-C]|[a-c]/)) {
      translatedNum.push('2');
    } else if (num[i].match(/[D-F]|[d-f]/)) {
      translatedNum.push('3');
    } else if (num[i].match(/[G-I]|[g-i]/)) {
      translatedNum.push('4');
    } else if (num[i].match(/[J-L]|[j-l]/)) {
      translatedNum.push('5');
    } else if (num[i].match(/[M-O]|[m-o]/)) {
      translatedNum.push('6');
    } else if (num[i].match(/[P-S]|[p-s]/)) {
      translatedNum.push('7');
    } else if (num[i].match(/[T-V]|[t-v]/)) {
      translatedNum.push('8');
    } else if (num[i].match(/[W-Z]|[w-z]/)) {
      translatedNum.push('9');
    } else {
      translatedNum.push(num[i]);
    }
  }
  translatedNum = translatedNum.join('');
  return translatedNum;
}


module.exports = translateNumber;

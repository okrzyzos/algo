
{/* increment a custom Number type */}

function increment (num) {
  for (var i = num.length - 1; i >= 0; i--) {
      num[i]++;
      if (num[i] > 9) {
        num[i] = 0;
        if (i === 0) {
          // Last iteration, but we need to carry - unshift a 1:
          num.unshift(1);
        }
      }
      else break;
  }
  return num;
}


console.log(increment([9, 9, 9, 9]));


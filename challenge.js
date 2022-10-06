function balancedSums(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const size = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] > 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }
  zeroCount = (zeroCount / size).toFixed(6);
  positiveCount = (positiveCount / size).toFixed(6);
  negativeCount = (negativeCount / size).toFixed(6);
  return [zeroCount, positiveCount, negativeCount];
}

module.exports = balancedSums;
function MinWindowSubstring(strArr: [string, string]): string {
  const [N, K] = strArr;

  if (K.length > N.length) return ""

  const charCountK: Record<string, number> = {};

  for (const char of K) {
    charCountK[char] = (charCountK[char] || 0) + 1;
  }

  let left = 0;
  let minLength = Infinity;
  let minStart = 0;
  let matchCount = 0;
  const windowCharCount: Record<string, number> = {};

  for (let right = 0; right < N.length; right++) {
    const charRight = N[right];

    if (charRight in charCountK) {
      windowCharCount[charRight] = (windowCharCount[charRight] || 0) + 1;

      if (windowCharCount[charRight] <= charCountK[charRight]) {
        matchCount++;
      }
    }

    while (matchCount === K.length) {
      const windowLength = right - left + 1;

      if (windowLength < minLength) {
        minLength = windowLength;
        minStart = left;
      }

      const charLeft = N[left];

      if (charLeft in charCountK) {
        if (windowCharCount[charLeft] === charCountK[charLeft]) {
          matchCount--;
        }

        windowCharCount[charLeft]--;
      }

      left++;
    }
  }

  // code goes here
  return minLength === Infinity
    ? ''
    : N.slice(minStart, minStart + minLength);
}

// keep this function call here
// @ts-ignore
console.log(MinWindowSubstring(["aaabaaddae", "aed"]));

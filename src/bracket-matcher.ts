function BracketMatcher(str: string): number {
  let count = 0;

  for (const char of str) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      count--;

      if (count < 0) return 0;
    }
  }

  return count === 0 ? 1 : 0;
}

// keep this function call here
console.log(BracketMatcher('(coder)(byte))')); // Output: 0
console.log(BracketMatcher('(c(oder)) b(yte)')); // Output: 1

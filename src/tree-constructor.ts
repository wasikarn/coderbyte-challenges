function TreeConstructor(strArr: string[]): boolean {
  const parentCount: Record<string, number> = {};
  const childCount: Record<string, number> = {};

  for (const pair of strArr) {
    const [childStr, parentStr] = pair.match(/\d+/g) || [];
    const child = Number(childStr);
    const parent = Number(parentStr);

    // Count how many parents each child has
    if (childCount[child]) return false;
    childCount[child] = (childCount[child] || 0) + 1;

    // Count how many children each parent has
    parentCount[parent] = (parentCount[parent] || 0) + 1;
    if (parentCount[parent] > 2) return false;
  }

  // Determine the root by checking nodes that are only parents and not children
  const roots: number[] = Object.keys(parentCount)
    .map(Number)
    .filter((parent: number): boolean => !childCount[parent]);

  // There should be exactly one root
  return roots.length === 1;
}

// Example usage:
console.log(TreeConstructor(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])); // Output: true
console.log(TreeConstructor(['(1,2)', '(3,2)', '(2,12)', '(5,2)'])); // Output: false

function TreeConstructor(strArr: string[]): boolean {
  const parentCount: Record<string, number> = {};
  const childCount: Record<string, number> = {};

  for (const pair of strArr) {
    const [childStr, parentStr] = pair.match(/\d+/g) || [];
    const child = Number(childStr);
    const parent = Number(parentStr);

    // Count how many parents each child has
    if (!checkChildCount(childCount, child)) return false;

    // Count how many children each parent has
    if (!checkParentCount(parentCount, parent)) return false;
  }

  return hasSingleRoot(parentCount, childCount);
}

function checkChildCount(
  childCount: Record<string, number>,
  child: number,
): boolean {
  if (childCount[child]) return false;

  childCount[child] = (childCount[child] || 0) + 1;

  return true;
}

function checkParentCount(
  parentCount: Record<string, number>,
  parent: number,
): boolean {
  parentCount[parent] = (parentCount[parent] || 0) + 1;

  return parentCount[parent] <= 2;
}

function hasSingleRoot(
  parentCount: Record<string, number>,
  childCount: Record<number, number>,
): boolean {
  const roots: number[] = Object.keys(parentCount)
    .map(Number)
    .filter((parent: number): boolean => !childCount[parent]);

  return roots.length === 1;
}

// Example usage:
console.log(TreeConstructor(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])); // Output: true
console.log(TreeConstructor(['(1,2)', '(3,2)', '(2,12)', '(5,2)'])); // Output: false

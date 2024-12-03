# CoderByte Challenges

### [Min Window Substring](https://coderbyte.com/information/Min%20Window%20Substring)
Have the function `MinWindowSubstring(strArr)` take the array of strings stored in strArr,
which will contain only two strings, the first parameter being the string N and the second
parameter being a string K of some characters, and your goal is to determine the smallest
substring of N that contains all the characters in K. For example: if `strArr` is `["aaabaaddae", "aed"]`
then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string.
So for this example your program should return the string dae.

Another example: if strArr is `["aabdccdbcacd", "aad"]` then the smallest substring of N
that contains all of the characters in K is `"aabd"` which is located at the beginning of
the string. Both parameters will be strings ranging in length from 1 to 50 characters and
all of K's characters will exist somewhere in the string N. Both strings will only
contains lowercase alphabetic characters.

[Viewing solution.](src/min-window-substring.ts)

---

### [Tree Constructor](https://coderbyte.com/information/Tree%20Constructor)
Have the function `TreeConstructor(strArr)` take the array of strings stored in `strArr`, which will contain pairs of
integers in the following format: **(i1,i2)**, where **i1** represents a child node in a tree and the second integer **i2**
signifies that it is the parent of **i1**. For example: if `strArr` is `["(1,2)", "(2,4)", "(7,2)"]`, then this forms the
following tree:

![](img-tree-constructor.png)

which you can see forms a proper binary tree. Your program should, in this case, return the string **true** because a valid
binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string
**false**. All of the integers within the tree will be unique, which means there can only be one node in the tree with the
given integer value.

**Examples**
```
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true

Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
```

[Viewing solution.](src/tree-constructor.ts)

---

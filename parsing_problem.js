console.log(["1", "2", "4", "8", "16", "32"].map(parseInt)); // [1, NaN, NaN, NaN, 1, 17]

// Explanation:
// The parseInt function takes two arguments: the string to parse and the radix (base) to use for parsing.
// When we call map(parseInt), it passes three arguments to parseInt: the current element, the index, and the entire array.

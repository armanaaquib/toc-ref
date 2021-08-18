const createDfa = (initialState, transitionTable, finalStates) => {
  return (string) => {
    let currentState = initialState;

    for (let i = 0; i < string.length; i++) {
      const symbol = string[i];
      currentState = transitionTable[currentState][symbol];
    }

    return finalStates.includes(currentState) ? true : false;
  };
};

const oddLenDfa = createDfa("A", { A: { a: "B" }, B: { a: "A" } }, ["B"]);

console.log("Odd length string accepted over {a}");
console.log("a-", oddLenDfa("a"));
console.log("aaa-", oddLenDfa("a"));
console.log("-", oddLenDfa(""));
console.log("aa-", oddLenDfa("aa"));
console.log("-----");

const endigWith1Dfa = createDfa(
  "A",
  { A: { 0: "A", 1: "B" }, B: { 0: "A", 1: "B" } },
  ["B"]
);

console.log("Ending with 1 string accepted over {0, 1}");
console.log("0-", endigWith1Dfa("0"));
console.log("00-", endigWith1Dfa("00"));
console.log("100-", endigWith1Dfa("100"));
console.log("010-", endigWith1Dfa("010"));
console.log("1-", endigWith1Dfa("1"));
console.log("11-", endigWith1Dfa("11"));
console.log("001-", endigWith1Dfa("001"));
console.log("101-", endigWith1Dfa("101"));
console.log("-----");

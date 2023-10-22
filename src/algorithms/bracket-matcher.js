function BracketMatcher(str) {
  if (str.indexOf("(") < 0 && str.indexOf(")") < 0) return 1;

  let openBracket = 0;
  let closeBracket = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") openBracket++;
    if (str[i] === ")") closeBracket++;
    if (closeBracket > openBracket) return 0;
  }

  if (openBracket === closeBracket) return 1;
  return 0;
}

console.log(BracketMatcher("((hello (world))"));
console.log(BracketMatcher("(c(oder))) b(yte)"));
console.log(BracketMatcher("(coder)(byte))"));

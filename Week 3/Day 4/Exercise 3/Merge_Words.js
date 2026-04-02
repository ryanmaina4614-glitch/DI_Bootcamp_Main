function mergeWords(str) {
  return function(next) {
    return next === undefined
      ? str
      : mergeWords(str + ' ' + next);
  };
}
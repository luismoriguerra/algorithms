function duplicateCount(text){
  const matches = text.toLocaleLowerCase().split('').sort().join('').match(/(.+)\1/g);
  return matches && matches.length || 0
}

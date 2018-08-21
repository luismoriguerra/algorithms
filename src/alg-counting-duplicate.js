

function duplicateCount(text){
  return (text.toLocaleLowerCase().split('').sort().join('').match(/(.+)\1/g) || []).length
}

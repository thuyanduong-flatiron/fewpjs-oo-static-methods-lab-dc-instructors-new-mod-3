class Formatter {
  //add static methods here
  static capitalize(string){
    return `${string[0].toLocaleUpperCase()}${string.slice(1)}`
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(string){
    let wordArray = string.split(' ')
    let titleArray = []
    titleArray.push(Formatter.capitalize(wordArray[0]))
    for(let i = 1; i<wordArray.length; i++){
      if(wordArray[i] === 'the' || wordArray[i] === 'a' || wordArray[i] === 'an' || wordArray[i] === 'but' || wordArray[i] === 'of' || wordArray[i] === 'and' || wordArray[i] === 'for' || wordArray[i] === 'at' || wordArray[i] === 'by' || wordArray[i] === 'from'){
        titleArray.push(wordArray[i])
      }else{
        titleArray.push(Formatter.capitalize(wordArray[i]))
      }
    }
    return titleArray.join(' ')
  }
}

class Formatter {
  //add static methods 
  static capitalize(string) {
     return string.charAt(0).toUpperCase()+ string.slice( 1 )
  }
  static sanitize(string){
    
      return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    
  }
  static titleize(sentence){
    let exceptions =['the','a','an','but','of','and','for','at','by','from'];
    let result =[];
    let arrayOfWords = sentence.split(' ');
    for(let a = 0;a<arrayOfWords.length;a++){
      if(a ===0){
        result.push(this.capitalize(arrayOfWords[a]))
      }else if(exceptions.includes(arrayOfWords[a])){
        result.push(arrayOfWords[ a])
      }else {
        result.push(this.capitalize( arrayOfWords[ a ]))
      }
    }
    return result.join(" ");

  }
}
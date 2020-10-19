//  const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(argu){
    this.argu = argu;
  }
  encrypt(plainText, keyword) {

    var  _tabulaRecta = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    };

    if(plainText == undefined || keyword == undefined){thrown }
    else if(this.argu == true || this.argu == true  == "" || this.argu == undefined ){
      plainText = plainText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var encryptedText = "";
      var specialCharacterCount = 0;

      for( var i = 0; i < plainText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keywordIndex = _tabulaRecta.a.indexOf(keyword[keyLetter]);
  
        if( _tabulaRecta[plainText[i]] ){
          encryptedText += _tabulaRecta[plainText[i]][keywordIndex];
        }else{
          encryptedText += plainText[i];
          specialCharacterCount++;
        }
      }
  
      return encryptedText.toUpperCase();
    }
    else{
      plainText = plainText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var encryptedText = "";
      var specialCharacterCount = 0;

      for( var i = 0; i < plainText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keywordIndex = _tabulaRecta.a.indexOf(keyword[keyLetter]);
  
        if( _tabulaRecta[plainText[i]] ){
          encryptedText += _tabulaRecta[plainText[i]][keywordIndex];
        }else{
          encryptedText += plainText[i];
          specialCharacterCount++;
        }
      }
  
      return encryptedText.toUpperCase().split('').reverse().join('');
    }

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt(encryptedText, keyword) {

    var  _tabulaRecta = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    };

    if(encryptedText == undefined || keyword == undefined){thrown  }
    else if(this.argu == true || this.argu == "" || this.argu == undefined ){
      encryptedText = encryptedText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var decryptedText = "";
      var specialCharacterCount = 0;
  
      for( var i = 0; i < encryptedText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keyRow = _tabulaRecta[keyword[keyLetter]];
  
        if( keyRow.indexOf(encryptedText[i]) !== -1 ){
          decryptedText += _tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
        }else{
          decryptedText += encryptedText[i];
          specialCharacterCount++;
        }
      }
  
      return decryptedText.toUpperCase();
    }
    else{
      encryptedText = encryptedText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var decryptedText = "";
      var specialCharacterCount = 0;
      
  
      for( var i = 0; i < encryptedText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keyRow = _tabulaRecta[keyword[keyLetter]];
  
        if( keyRow.indexOf(encryptedText[i]) !== -1 ){
          decryptedText += _tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
        }else{
          decryptedText += encryptedText[i];
          specialCharacterCount++;
        }
      }
  
      return decryptedText.toUpperCase().split('').reverse().join('');
    }

    // throw new CustomError('Not implemented');
   // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

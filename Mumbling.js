function accum(s) {
    let newS = '';
      for(let i = 0; i < s.length; i++) {
         newS += s[i].toUpperCase();
         for(let j = 0; j < i; j++) {
           newS += s[i].toLowerCase();
         }
          if(i !== s.length - 1) newS += '-';
      }
      return newS;
    }
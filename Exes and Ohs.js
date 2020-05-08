function XO(str) {
    x = 0, o = 0;
    for(let i = 0; i < str.length; i++) {
      if(str[i] == 'x' || str[i] == 'X') x++;
      if(str[i] == 'o' || str[i] == 'O') o++;
    }
    if(x == o) return true;
    else return false;
}
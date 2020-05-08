function removeUrlAnchor(url){
    let anchor = url.split('').filter(x => x == '#');
    if(anchor.length !== 0) return url.slice(0, url.indexOf(anchor));
    else return url;
  }
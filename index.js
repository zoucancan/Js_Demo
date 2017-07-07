window.onload = function(){
  var lis = document.getElementsByTagName('li');
  for(var i=0;i<lis.length;i++){
    lis[i].onmouseover = function(){
      for(var j=0;j<lis.length;j++){
        lis[j].className = '';
      }
      this.className = 'big';
    }
  }
}

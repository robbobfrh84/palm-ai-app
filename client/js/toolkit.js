const random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearAllChildren(parentID){
  while (parentID.hasChildNodes()){
    parentID.removeChild(parentID.lastChild);
  }
}

//shuffle an array
function shuffle(o){
  for(var j,x,i = o.length; i; j=Math.floor(Math.random()*i), x=o[--i], o[i] = o[j], o[j] = x);
  return o;
}
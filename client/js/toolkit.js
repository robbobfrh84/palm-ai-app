const random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearAllChildren(parentID){
  while (parentID.hasChildNodes()){
    parentID.removeChild(parentID.lastChild);
  }
}
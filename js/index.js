

function clearCanvas() {
    var element = $('#canvas-container');
    if(element.children() != []){
      $(element.children()).remove();
    }
}
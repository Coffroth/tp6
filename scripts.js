// Javascript for tp5

window.onload = function() {
  
  document.querySelector("#HeadText h1").classList.add("tp");
  
  document.querySelector("#HeadText h1").onclick = function() {
    
    this.classList.toggle("black");
  }
  
  document.querySelector(".Recipe-Col #ingredients").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
  
    document.querySelector(".Recipe-Col #equipment").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
    
      document.querySelector(".Recipe-Col #directions").onclick = function() {
    
    this.classList.toggle("tpShow");
  }
      
     document.querySelector(".Recipe-Col #ingredients ul").innerHTML += "<li> A hunger for BREAD</li>"
 
} // end window.onload
function setup() {
    createCanvas(500, 500);
      background("green");
  
  }
  
  function draw() {
    stroke("pink");
    fill ("blue");
    
   // console.log(mouseIsPressed);
    
    if(mouseIsPressed){
      rect (mouseX, mouseY , 35 , 45);
      
    }
    
  }
// class Plinko  {
//   constructor(x,y,r){ 
//       var options ={
//         isStatic : true
//   }
//   this.plinko = []
//   this.r = r;
//   this.body = Bodies.circle(x, y, r, options);
      
// }
//   display() {
//     var pos = this.body.position;
//      push();
//      translate(pos.x, pos.y);
//      ellipseMode(RADIUS);
//      fill("white")
//      ellipse(0, 0, this.r, this.r);
//      pop();
   
//   }

// }


// class Plinko{
//   constructor(x, y, r) {
//       var options = {
//          isStatic:true
//       }
//       this.x = x;
//       this.y = y;
//       this.r = r;
//       this.body = Bodies.circle(x, y,r, options);
//       World.add(world, this.body);
//     }
    
//     display(){
//       var pos = this.body.position;
//       push();
//       translate(pos.x, pos.y);
//       ellipseMode(RADIUS);
//      fill("white")
//      ellipse(0, 0, this.r, this.r);
//       pop();       
// }

// }


class Plinko{
  constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();       
}

}

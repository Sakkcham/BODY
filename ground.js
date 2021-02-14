class Ground{
  constructor(x,y,width,height){
     var Groundoptions={
         isStatic:true
     }
     this.body=Bodies.rectangle(x,y,width,height,Groundoptions);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
  }
     display(){
     var Groundpos=this.body.position;
     rectMode(CENTER);
     fill(255);

     rect(Groundpos.x,Groundpos.y,this.width,this.height);
}
     }
     
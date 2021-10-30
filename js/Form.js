class Form {
  constructor() {
  this.input=createInput("").attribute("placeHolder","Enter Your Name");
  this.playbutton=createButton("Play");
  this.titleImage=createImg("assets/title.png");
  this.greeting=createElement("h4");
  }

setElementPosition(){
  this.titleImage.position(120,10);
  this.input.position(width/2-110,height/2-80);
  this.playbutton.position(width/2-90,height/2-50);
  this.greeting.position(width/2-300,height/2-100);
}

display(){
this.setElementPosition();  
this.handleMousePressed();
}

hide(){
  this.input.hide();
  this.playbutton.hide();
  this.titleImage.hide();
  this.greeting.hide();
}

handleMousePressed(){
  this.playbutton.mousePressed(()=>{
    this.input.hide();
    this.playbutton.hide();
    var message=`Hello ${this.input.value()}</br> wait For Other Player To Join`
    this.greeting.html(message);
  });
}

}

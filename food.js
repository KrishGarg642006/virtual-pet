class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed
    this.image=loadImage('Images/Milk.png')

    }
    updatefoodStock(foodStock){
        this.foodStock=foodStock;
    }
    getfoodStock(){
       return this.foodstock;

    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1
        }
        
    }
    getfedTime(){
        this.lastFed=lastFed;
        
    }
    
    display(){
     var   x= 80,y=100;
     imageMode(CENTER);
     image(this.image,720,228,78,78);

     if(this.foodStock !=0){
         for(var i=0 ;i.this.foodStock;i++){
             if(i%10==0){
                 x=80
                 y=y+50;
             }
            image(this.image,x,y,50,50);
            x=x+30;
         }
     } 

    }

}
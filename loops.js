let i=0;
for(i=0;1<5;i++)
{
    document.write("<br>value of i :"+i);
    if(i==2)
    break;
}    
i=0;
while(i<5)
{
document.write("<br><b>i is :"+i+"</b>");
    i++;

}
while(i<5)
{
    document.write("<br><b>while again: i is :"+i+"</b>")
    i++;
}
do{
    document.write("inside do while");
    i++;

}
while(i<5)

 class vehicle{
    constructor(wheel,brand,mileage,color){
        this.wheel=wheel;
        this.brand=brand;
        this.mileage=mileage;
        this.color=color;
 }
    
 display(){
    document.write("<br>brand is :"+this.brand+" color is :</br>"+this.color);
 }
}
let scooter= new vehicle(2,'bajaj','30kmpl','black');
scooter.display();
let maruthi= new vehicle(4,'alto','40kmpl','red');
maruthi.display();
class jeep extends vehicle{
    constructor(speed)
    {
        super();//constructor of parent
this.speed=speed;
    }
    display()
    {
        super.display();//refers to the parent
        document.write("<br>speed is :"+this.speed);

    }
}
try{
    let bmw=new jeep('150kmph','red');
    bmw.disp();
    let thar =new jeep('120kmph');
    thar.display(); 
}
catch(error)
{
    document.write(error);
}
let thar=new jeep('120kmph');
thar.display();

 
var person={name:'karthick',age:22,nation:'india'};//json
console.log(person);
console.log(person.name);
document.write(person);
document.write("age is "+person.age);
document.write(JSON.stringify(person));


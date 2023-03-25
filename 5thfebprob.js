class desktop{
    constructor(,samsung,asus){
    this.lcd=lcd;
    this.samsung=samsung;
    this.asus=asus;
    }


    dispaly(){
        doscument.write("the desktop is"+this.lcd+"the brand is"+this.samsung)

    }
}
    class laptop extends desktop{
        constructor(samsungv2,touchdisplay){
            this.samsungv2=samsungv2;
            this.touchdisplay=touchdisplay;

        }
        dispaly(){
            document.write("the brand is"+this.samsungv2+"and the configurarion is "+this.touchdisplay);

        }
    }
class mobile extends laptop{
    constructor(apple,48pxls){
        this.apple=apple;
        this.448pxls
    }
    dispaly()
}
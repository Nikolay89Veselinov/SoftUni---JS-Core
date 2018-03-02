class Ractangle{
    constructor(width, height, color){

        this.width = width
        this.heigth = height
        this.color = color

    }

    calcArea(){
        return this.width * this.heigth
    }

}

let myRect = new Ractangle(5, 10, 'red')

console.log(myRect)
console.log(myRect.calcArea())
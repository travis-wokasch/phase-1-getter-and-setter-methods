class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius*2
    }

    get circumference(){
        return Math.PI*this.diameter
    }

    get area(){
        return (this.radius*this.radius)*Math.PI
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    set circumference(newCircumference){
       this.radius = newCircumference/(2*Math.PI)
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}
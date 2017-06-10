
class Human{
    firstName: string;
    lastName: string;
    age: number

    constructor(name1: string, name2: string){

        this.setName(name1, name2)
    }

    setName(name1: string, name2: string){
        this.firstName = name1;
        this.lastName = name2;
    }

    getFullName(){
        
        var container:string = `${this.firstName} ${this.lastName}`

        return container;

    }
    
}

let adeel = new Human('Muhammad', 'Adeel');

console.log(adeel.getFullName());

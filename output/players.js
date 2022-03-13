//classes
export class player {
    //1st way
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //2nd way
    // private name: string;
    // public age: number;
    // readonly country: string;
    // constructor(n: string, a: number, c: string) {
    //   this.name = n;
    // //   this.age = a;
    //   this.country = c;
    // }
    play() {
        console.log(`${this.name},${this.age} playing form ${this.country}`);
    }
}

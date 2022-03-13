// //classes
// export class player {
//   //1st way
export class player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.name;
    }
    play() {
        console.log(`${this.name},${this.age} playing form ${this.country}`);
    }
}

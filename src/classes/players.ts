// //classes
// export class player {
//   //1st way

//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string) {

//     }

//   //2nd way
//   // private name: string;
//   // public age: number;
//   // readonly country: string;

//   // constructor(n: string, a: number, c: string) {
//   //   this.name = n;
//   // //   this.age = a;
//   //   this.country = c;
//   // }

//   play() {
//     console.log(`${this.name},${this.age} playing form ${this.country}`);
//   }
// }



//classes used interface model

import { IsPlayer } from "../interfaces/IsPlayer.js";

export class player implements IsPlayer {

  constructor(
    private name: string, 
    public age: number, 
    readonly country: string) {
}
  getProperty(){
    return this.name;
  }
  play() {
    console.log(`${this.name},${this.age} playing form ${this.country}`);
  }
}

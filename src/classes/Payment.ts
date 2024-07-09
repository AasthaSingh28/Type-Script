import { HasFormatter } from "../Interfaces/HasFormatter.js";
 export class Payment implements HasFormatter{
    constructor (
        readonly recipient : string,
        private dtail: string,
        public amount : number,
    ){}

    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.dtail}`
    }
 }
import { House } from "./House";

export class Chair {
    public chairID: string
    constructor(chairID: string, house: House) {
        this.chairID = chairID;
    }
}

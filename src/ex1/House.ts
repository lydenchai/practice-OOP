import { Chair } from "./Chair";

export class House {
    private chair: Chair[] = [];

    public addChair(chairId: string): Chair {
        let chair = new Chair(chairId, this);
        this.chair.push(chair);
        return chair;
    }
}
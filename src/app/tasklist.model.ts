import { Task } from "./task.model";

export class TaskList {
    id: any;
    name: string;

    constructor(id: any, name: string) {
        this.id = id;
        this.name = name;
    }
}

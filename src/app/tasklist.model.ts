import { Task } from "./task.model";

export class TaskList {
    id: any;
    name: string;
    tasks: Task[];

    constructor() {
        this.name = "Unknown Task List";
        this.tasks = [];
    }
}
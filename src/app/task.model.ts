import { TaskList } from "./tasklist.model";

export class Task {
    id: any;
    done: boolean;
    title: string | null;
    dueTime: Date | null;
    description: string | null;
    taskList: TaskList | null;

    constructor(id: any, done: boolean, title: string | null, description: string | null, dueTime: Date | null, taskList: TaskList | null) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.dueTime = dueTime;
        this.description = description;
        this.taskList = taskList;
    }

    getDateString(): any {
        let date = this.dueTime;
        return date ? ((date.getFullYear().toString() + '-'
            + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
            + ("0" + (date.getDate())).slice(-2))
            + 'T' + date.toTimeString().slice(0, 5))
            : null;
    }
}

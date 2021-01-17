export class Task {
    id: any;
    done: boolean;
    title: string | null;
    dueTime: Date | null;
    description: string | null;

    constructor(id: any, done: boolean, title: string | null, description: string | null, dueTime: Date | null) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.dueTime = dueTime;
        this.description = description;
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

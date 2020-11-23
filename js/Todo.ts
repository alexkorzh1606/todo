
let date = new Date();
export default class Todo{
    priority: number;
    text: string;
    dt: string;
    dl: string;
    id: number;

    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    constructor(priority:number, text:string, dl:string) {
        this.priority = priority;
        this.text = text;
        this.dt = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        this.dl = dl;
    }
}


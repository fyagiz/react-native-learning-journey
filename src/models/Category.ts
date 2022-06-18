export default class Category {
    id: number | string;
    title: string;
    color: string;

    constructor(id: number | string, title: string, color: string) {
        this.id = id;
        this.title = title;
        this.color = color;
    }


}

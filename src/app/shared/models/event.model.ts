export class Event {
    id: number;
    name: string;
    description: string;
    city: string

    constructor (id: number, name: string, description: string, city: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.city = city;
    }
}
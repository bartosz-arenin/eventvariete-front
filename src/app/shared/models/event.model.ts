export class Event {
    id: number;
    name: string;
    preview: string;
    description: string;
    city: string;
    address: string;
    price: number;
    typeOfEvent: string;

    constructor (
                    id: number, 
                    name: string, 
                    preview: string,
                    description: string, 
                    city: string,
                    address: string,
                    price: number,
                    typeOfEvent: string
                ) {

        this.id = id;
        this.name = name;
        this.preview = preview;
        this.description = description;
        this.city = city;
        this.address = address;
        this.price = price;
        this.typeOfEvent = typeOfEvent;
    }
}
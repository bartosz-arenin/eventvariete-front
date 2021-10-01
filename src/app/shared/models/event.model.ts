export class Event {
    id: number;
    name: string;
    preview: string;
    description: string;
    city: string;
    eventStartDate: string;
    eventEndDate: string;
    typeOfEvent: string;

    constructor (
                    id: number, 
                    name: string, 
                    preview: string,
                    description: string, 
                    city: string,
                    eventStartDate: string,
                    eventEndDate: string,
                    typeOfEvent: string
                ) {

        this.id = id;
        this.name = name;
        this.preview = preview;
        this.description = description;
        this.city = city;
        this.eventStartDate = eventStartDate;
        this.eventEndDate = eventEndDate;
        this.typeOfEvent = typeOfEvent;
    }
}
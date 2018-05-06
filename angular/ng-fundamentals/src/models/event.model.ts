
import { LocationModel } from './location.model';
import { SessionModel } from './session.model';


export class EventModel {
    constructor(
        public id: number,
        public name: string,
        public date: string,
        public time: string,
        public price: number,
        public imageUrl: string,
        public location: LocationModel,
        public sessions: SessionModel[]
    ){}
}


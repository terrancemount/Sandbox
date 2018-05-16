export class SessionModel{
    constructor(
        public id: number,
        public name: string,
        public presenter: string,
        public duration: number,
        public level: string,
        public abstract: string,
        public voters: string[]
    ){}
}


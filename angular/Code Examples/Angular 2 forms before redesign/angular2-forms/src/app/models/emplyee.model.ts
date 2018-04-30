export class Employee {
    constructor(
        public firstName: string,  //syntax used to create a local property of this type
        public lastName: string,
        public isFullTime: boolean,
        public paymentType: string,
        public primaryLanguage: string
    ){}
}
export class Quote {
    // public upvotes:number;
    // public downvotes:number;
    // public myDate:Date;
    public showDescription:boolean;
    constructor(public id: number,public name: string, public description:string,){
    // this.upvotes =0;
    // this.downvotes =0;
    // this.myDate =new Date();
        this.showDescription=false
}
}
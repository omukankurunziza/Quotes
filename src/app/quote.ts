export class Quote {
    // public upvotes:number;
    // public downvotes:number;
    // public myDate:Date;
    public showDescription:boolean;
    constructor(public name: string, public author:string,public quote:string){
    // this.upvotes =0;
    // this.downvotes =0;
    // this.myDate =new Date();
        this.showDescription=false
}
}
export class News {
    constructor(private topic : string, public content: string, public dateOfPublication: Date,
         public _id?: string, public user?: {_id:number, firstName:string, lastName:string}, public isArchived? : boolean) {

    }
}
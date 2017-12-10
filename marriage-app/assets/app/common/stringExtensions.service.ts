import { Injectable } from "@angular/core";
import { config } from "../common/config";


@Injectable()
export class StringExtensionService {

    constructor(){

    }

    filterByProperties(inputArray: any[], filter:{}): any[] {

        let result : any[] = [];
        for(let property in filter){
            
            result = result.concat(inputArray.filter(x=>x[property].toLowerCase().includes(filter[property])));
        }
        return result;
    }    
}
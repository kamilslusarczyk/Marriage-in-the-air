import { Injectable } from "@angular/core";
import { config } from "../common/config";

@Injectable()
export class StringExtensionService {

    constructor(){
    }

    filterByContent(inputArray: any[], valueToFilterBy: string): any[] {
        return inputArray.filter(x => x.content.toLowerCase().includes(valueToFilterBy.toLowerCase()));
    }    
}
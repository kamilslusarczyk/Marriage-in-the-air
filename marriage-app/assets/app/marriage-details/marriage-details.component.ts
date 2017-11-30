import { Component } from "@angular/core";
import { MarriageDetailsService } from "./marriage-details.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { MarriageDetails } from "./marriageDetails.model";

@Component({
    selector: "marriage-details",
    styleUrls: [],
    templateUrl: "./marriage-details.component.html"
})
export class MarriageDetailsComponent implements OnInit {

    ngOnInit(): void {
        // var sampleDetails = new MarriageDetails("A", new Date(), 1,2);
        // this.marriageDetailsService.addMarriageDetails(sampleDetails).subscribe(
        //     data => {
        //         debugger;
        //         console.log(data);
        //     },
        //     err => {
        //         debugger;
        //         console.log('Something went wrong!');
        //     }
        // );

        this.marriageDetailsService.get().subscribe(
            data => {
                debugger;
                console.log(data);
            },
            err => {
                debugger;
                console.log('Something went wrong!');
            }
        );
    }

    constructor(private marriageDetailsService: MarriageDetailsService) {

    }

}
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
    marriageDetails: MarriageDetails;

    ngOnInit(): void {
        // var sampleDetails = new MarriageDetails("A", new Date(), 51.508742,-0.120850);
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
                this.marriageDetails = data.Data[0];
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }

    constructor(private marriageDetailsService: MarriageDetailsService) {

    }

}
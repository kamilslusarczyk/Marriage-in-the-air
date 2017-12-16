import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MarriageDetailsService } from "../marriage-details/marriage-details.service";
import { MarriageDetails } from "../marriage-details/marriageDetails.model";
import { MessageHelperService } from "../common/messageHelper.service";
import { Message } from 'primeng/components/common/api';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { SeverityEnum } from "../common/messageSeverity.enum";
import { Router } from "@angular/router";

@Component({
    selector: "admin-marriage",
    templateUrl: './admin-marriage.component.html',
})
export class AdminMarriageDetailsComponent implements OnInit {

    content: FormControl;
    latitude: FormControl;
    longtitude: FormControl;
    messages: Message[] = [];

    constructor(private marriageService: MarriageDetailsService, private messageHelper: MessageHelperService, private router: Router) {
        this.content = new FormControl("");
        this.latitude = new FormControl("");
        this.longtitude = new FormControl("");
    }

    ngOnInit(): void {
        this.marriageService.get().subscribe(
            data => {
                let result = data.data[0];
                this.content.setValue(result.content);
                this.latitude.setValue(result.latitude);
                this.longtitude.setValue(result.longtitude);
            },
            err => {
                console.log(err);
            });
    }

    onSubmit() {
        let content = this.content.value;
        let latitude = this.latitude.value;
        let longitude = this.longtitude.value;

        let marriageDetails = new MarriageDetails(content, new Date(), latitude, longitude);

        this.marriageService.addMarriageDetails(marriageDetails).subscribe(
            data => {
                this.messageHelper.addSingleMessage(SeverityEnum.Success, "Update of details completed", "");
            },
            err => {
                this.messageHelper.addSingleMessage(SeverityEnum.Error, "Oh nope!", "");
            });
    }
}
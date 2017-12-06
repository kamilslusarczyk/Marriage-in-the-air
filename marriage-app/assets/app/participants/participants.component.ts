import { Component } from "@angular/core";
import { IAmAbleToShowMessages } from "../common/ableToShowMessages.interface";
import { Message } from "primeng/components/common/api";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { FormControl } from "@angular/forms";
import { StringExtensionService } from "../common/stringExtensions.service";
import { ParticipantsService } from "./participants.service";
import { Participant } from "./participant.model";
import { MessageHelperService } from "../common/messageHelper.service";
import { SeverityEnum } from "../common/messageSeverity.enum";

@Component({
    selector: "participants",
    templateUrl: './participants.component.html',
})
export class ParticipantsComponent implements OnInit, IAmAbleToShowMessages {

    messages: Message[];
    Participants: Participant[] = [];
    FilteredParticipants: Participant[] = [];
    searchParticipantsControl: FormControl;

    participantNameControl: FormControl;

    constructor(private stringExtensionService: StringExtensionService, private participantsService: ParticipantsService, private messageHelper: MessageHelperService) {
        this.searchParticipantsControl = new FormControl("");
        this.participantNameControl = new FormControl("");
    }

    ngOnInit(): void {
        this.getParticipants();
    }

    getParticipants() {
        this.participantsService.getAll().subscribe(
            data => {
                this.Participants = data.Data;
                this.FilteredParticipants = this.Participants;
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }

    createNewParticipant() {
        var name = String(this.participantNameControl.value);
        let participant = new Participant(name);
        this.participantsService.add(participant).subscribe(
            data => {
                this.getParticipants();
                this.messageHelper.addSingleMessage(SeverityEnum.Success, "Creation of participant completed", "");
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }

    searchInputChanged(): void {
        var controlValueParsed = String(this.searchParticipantsControl.value);
        this.FilteredParticipants = this.stringExtensionService.filterByContent(this.Participants, controlValueParsed);
    }

    //this is event emmited by child of this component - participant-item.component
    deletedOrUpdated($event) {
        this.getParticipants();
    }
}
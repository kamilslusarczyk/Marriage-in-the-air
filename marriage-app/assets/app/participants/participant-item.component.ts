import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Participant } from "./participant.model";
import { IAmAbleToShowMessages } from "../common/ableToShowMessages.interface";
import { Message } from "primeng/primeng";
import { ParticipantsService } from "./participants.service";
import { MessageHelperService } from "../common/messageHelper.service";
import { SeverityEnum } from "../common/messageSeverity.enum";

@Component({
    selector: "participant-item",
    templateUrl: './participant-item.component.html',
})
export class ParticipantItemComponent implements OnInit, IAmAbleToShowMessages {
    ngOnInit(): void {
    }
    
    messages: Message[] = [];
    inputViolated = false;

    @Input()
    participantInstance: Participant

    @Output()
    deletedOrUpdated = new EventEmitter<boolean>();
    
    constructor(private participantService: ParticipantsService, private messageHelper: MessageHelperService){

    }

    updateEntity(){
        this.participantService.update(this.participantInstance).subscribe(
            data => {
                this.inputViolated = false;
                this.emitEntityStateChange();
                this.messageHelper.addSingleMessage(SeverityEnum.Success, "Update of participant completed", "");
            },
            err => {
                this.messageHelper.addSingleMessage(SeverityEnum.Error, "Oh nope!", "");
            });
    }

    deleteEntity(){
        this.participantService.delete(this.participantInstance).subscribe(
            data => {
                this.messageHelper.addSingleMessage(SeverityEnum.Info, "Delete of participant completed", "");
                this.inputViolated = false;
                this.emitEntityStateChange();
            },
            err => {
                this.messageHelper.addSingleMessage(SeverityEnum.Error, "Oh nope!", "");
            });
    }
    
    controlValueChanged(){
        this.inputViolated = true;
    }

    emitEntityStateChange(){
        this.deletedOrUpdated.emit(true);
    }
}
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Participant } from "./participant.model";
import { IAmAbleToShowMessages } from "../common/ableToShowMessages.interface";
import { Message } from "primeng/primeng";
import { ParticipantsService } from "./participants.service";
import { MessageHelperService } from "../common/messageHelper.service";

@Component({
    selector: "participant-item",
    templateUrl: './participant-item.component.html',
})
export class ParticipantItemComponent implements OnInit, IAmAbleToShowMessages {
    ngOnInit(): void {
        this.messages.push({severity:'info', summary:'Site has been loaded', detail:''})
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
                this.messages = [];
                this.messages.push({severity:'success', summary:'You have updated participant', detail:''})
                this.inputViolated = false;
                this.emitEntityStateChange();
            },
            err => {
                this.messageHelper.pushMessage('error', 'Oh nope', '', this.messages, true)
            });
    }

    deleteEntity(){
        this.participantService.delete(this.participantInstance).subscribe(
            data => {
                this.messages = this.messageHelper.pushMessage('error', 'You have succesfully deleted participant!', '', this.messages, true)
                this.inputViolated = false;
                this.emitEntityStateChange();
            },
            err => {
                this.messageHelper.pushMessage('error', 'Oh nope', '', this.messages, true)
            });
    }
    
    controlValueChanged(){
        this.inputViolated = true;
    }

    emitEntityStateChange(){
        this.deletedOrUpdated.emit(true);
    }
}
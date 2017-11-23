import { Component, Output, Input, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>()
    color = "red";

    constructor(private messageService: MessageService) {

    }

    onEdit() {
        this.editClicked.emit("a new value");
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}
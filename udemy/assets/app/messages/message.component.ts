import { Component, Output, Input , EventEmitter} from "@angular/core";
import { Message } from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>()
color = "red";
    onEdit() {
        this.editClicked.emit("a new value");
    }
}
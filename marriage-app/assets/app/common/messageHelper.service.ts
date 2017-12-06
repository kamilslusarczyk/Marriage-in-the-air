import { Injectable } from "@angular/core";
import { Message } from "primeng/components/common/message";
import { MessageService } from "primeng/components/common/messageservice";
import { SeverityEnum } from "./messageSeverity.enum";

@Injectable()
export class MessageHelperService {

    constructor(private messageService: MessageService) {

    }

    addSingleMessage(severity: SeverityEnum, summary: string, detail: string) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    addMultipleMessages() {
        //from documentation - need to rebuild that
        this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
        { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
    }

    clearMessages() {
        this.messageService.clear();
    }
}
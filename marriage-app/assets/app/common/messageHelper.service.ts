import { Injectable } from "@angular/core";
import { Message } from "primeng/components/common/message";

@Injectable()
export class MessageHelperService {
    //todo - replace severity with enum
    pushMessage(severity: string, summary: string, detail: string, messagesArray: any[], shouldClearMessagesArray: boolean) : Message[] {
        if (shouldClearMessagesArray)
            messagesArray = [];

        messagesArray.push({ severity: 'success', summary: severity, detail: detail });

        return messagesArray;
    }
}
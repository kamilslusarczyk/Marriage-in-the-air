import { NgModule } from "@angular/core";
import { CheckboxModule, MessageModule, MessagesModule, InputTextareaModule, ButtonModule } from "primeng/primeng";
import {GrowlModule} from 'primeng/primeng';

@NgModule({
 exports:[CheckboxModule, MessageModule, MessagesModule, GrowlModule, InputTextareaModule, ButtonModule ]
})
export class PrimeNgModule {

}


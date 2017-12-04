import { NgModule } from "@angular/core";
import { CheckboxModule, MessageModule, MessagesModule } from "primeng/primeng";
import {GrowlModule} from 'primeng/primeng';

@NgModule({
 exports:[CheckboxModule, MessageModule, MessagesModule, GrowlModule ]
})
export class PrimeNgModule {

}


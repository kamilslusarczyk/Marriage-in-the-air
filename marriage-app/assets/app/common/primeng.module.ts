import { NgModule } from "@angular/core";
import { CheckboxModule, MessageModule, MessagesModule } from "primeng/primeng";

@NgModule({
 exports:[CheckboxModule, MessageModule, MessagesModule ]
})
export class PrimeNgModule {

}


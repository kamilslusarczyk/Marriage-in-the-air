import { NgModule } from "@angular/core";
import { CheckboxModule,
        MessageModule,
        MessagesModule,
        InputTextareaModule,
        ButtonModule,
        InputTextModule,
        ChartModule,
        PanelMenuModule } from "primeng/primeng";
import {GrowlModule} from "primeng/primeng";

@NgModule({
 exports:[CheckboxModule,
        MessageModule,
        MessagesModule,
        GrowlModule,
        InputTextareaModule,
        ButtonModule,
        InputTextModule,
        ChartModule,
        PanelMenuModule]
})
export class PrimeNgModule {

}


import { NgModule } from "@angular/core";
import { CheckboxModule,
        MessageModule,
        MessagesModule,
        InputTextareaModule,
        ButtonModule,
        InputTextModule,
        ChartModule,
        PanelMenuModule,
        EditorModule,
        GrowlModule,
        FieldsetModule,
        ConfirmDialogModule,
        ConfirmationService,
        TooltipModule } from "primeng/primeng";

@NgModule({
 exports:[CheckboxModule,
        MessageModule,
        MessagesModule,
        GrowlModule,
        InputTextareaModule,
        ButtonModule,
        InputTextModule,
        ChartModule,
        PanelMenuModule,
        EditorModule,
        FieldsetModule,
        ConfirmDialogModule,
        TooltipModule],
providers:[
        ConfirmationService
        ]
})
export class PrimeNgModule {

}


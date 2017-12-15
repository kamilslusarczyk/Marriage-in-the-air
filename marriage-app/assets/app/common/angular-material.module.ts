import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card"
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
imports:[BrowserAnimationsModule],
exports:[MatTabsModule, MatCardModule, MatExpansionModule]

})
export class AngularMaterialModule{
    
}
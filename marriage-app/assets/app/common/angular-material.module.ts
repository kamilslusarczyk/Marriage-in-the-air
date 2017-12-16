import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card"
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


@NgModule({
imports:[BrowserAnimationsModule],
exports:[MatTabsModule, MatCardModule, MatExpansionModule,MatListModule,MatFormFieldModule,MatInputModule]

})
export class AngularMaterialModule{
    
}
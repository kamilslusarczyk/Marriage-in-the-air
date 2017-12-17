import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card"
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
imports:[BrowserAnimationsModule],
exports:[
     MatTabsModule,
     MatCardModule,
     MatExpansionModule,
     MatListModule,
     MatFormFieldModule,
     MatInputModule,
     MatDialogModule,
     MatButtonModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatCheckboxModule
    ]

})
export class AngularMaterialModule{
    
}
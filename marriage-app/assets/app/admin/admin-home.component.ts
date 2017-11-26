import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/primeng";
@Component({
  selector:"admin-home",
  templateUrl:"./admin-home.component.html",
  styleUrls:["./admin-home.component.css"]
})
export class AdminHomeComponent implements OnInit {

    private menuItems : MenuItem[];

    public ngOnInit(): void {
        this.menuItems = [
          {
            label: "Newsy",
            icon: "fa-file-o",
            items: [{
                    label: "Dodaj nowy",
                    icon: "fa-plus"
                },

            ]
        },
        {label : "Galeria",
        }
        ];
    }
}

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
            routerLink :["news"],
            items: [{
                    label: "Dodaj nowy",
                    icon: "fa-plus",
                    routerLink: ["news/add"]
                }]
        },
        {
            label : "Galeria",
            icon : "fa-picture-o",
            routerLink : ["gallery"],
            items: [{
                label: "Dodaj zdjęcie",
                icon: "fa-plus",
                routerLink: ["gallery/add"]
            }]
        },
        {
            label : "Statystyki",
            icon : "fa-bar-chart-o",
            routerLink : ["stats"],
            items: [{
                label: "xyz",
                icon: "fa-plus",
            }]
        }
        ];
    }
}

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
                    label:"Wszystkie newsy",
                    icon:"fa-list",
                    routerLink:["news"]
                },
                {
                    label: "Dodaj nowy",
                    icon: "fa-plus",
                    routerLink: ["news/add"]
                },
                {
                  label: "Archiwum",
                  icon : "fa-archive",
                  routerLink : ["news/archive"]  
                }]
        },
        {
            label : "Galeria",
            icon : "fa-picture-o",
            items: [{
                label: "Dodaj zdjęcie",
                icon: "fa-plus",
                routerLink: ["gallery/add"]
            }]
        },
        {
            label : "Statystyki",
            icon : "fa-bar-chart-o",
            items: [{
                label: "xyz",
                icon: "fa-plus",
                routerLink : ["stats"],
            }]
        },
        {
            label: "Planer",
            icon: "fa-list-alt",
            items:[{
                label:"Dodaj nowy",
                icon: "fa-plus",
                routerLink: ["planner/add"]
            }]
        }
        ];
    }
}

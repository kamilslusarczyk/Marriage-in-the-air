import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { News } from "../../news/news.model";
import { NewsService } from '../../news/news.service';
import { ConfirmationService } from "primeng/primeng";
import { MessageHelperService } from '../../common/messageHelper.service';
import { SeverityEnum } from '../../common/messageSeverity.enum';

@Component({
    selector:"admin-news",
    styleUrls:[],
    templateUrl: "./admin-news.component.html"
})
export class AdminNewsComponent implements OnInit {

    private newses : News[];

 
    constructor(private newsService : NewsService,
         private confirmationService : ConfirmationService,
         private messageHelperService : MessageHelperService) {

    }

    ngOnInit(): void {
        this.newsService.getNewsesGeneric<News[]>()
        .subscribe(x=> {
            this.newses = x.Data;
            console.log(x);
        });
    }

private removeNews(news : News){
    console.log(news);
    debugger;
    this.confirmationService.confirm({message:"Czy jesteś pewien?",
    accept:()=>{
        this.newsService.deleteNewsGeneric(news)
        .subscribe(x=>{
            if(x.success){
               this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Usunięto!",""); 
            }
        })
    }})
}

private editNews(news :News){
    console.log(news);
}

}
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { News } from "../../news/news.model";
import { NewsService } from '../../news/news.service';
import { ConfirmationService } from "primeng/primeng";
import { MessageHelperService } from '../../common/messageHelper.service';
import { SeverityEnum } from '../../common/messageSeverity.enum';
var _ = require('lodash');

@Component({
    selector:"admin-news",
    styleUrls:["./admin-news.component.css"],
    templateUrl: "./admin-news.component.html"
})
export class AdminNewsComponent implements OnInit {

    private newses : News[];

 
    constructor(private newsService : NewsService,
         private confirmationService : ConfirmationService,
         private messageHelperService : MessageHelperService) {

    }

    ngOnInit(): void {
        this.newsService.getNewsesGeneric<News[]>({isArchived : false})
        .subscribe(x=> {
            this.newses = x.data;
            console.log(x);
        });
    }

private removeNews(news : News){
    console.log(news);

    this.confirmationService.confirm({message:"Czy jesteś pewien, że chcesz usunąć wpis?",
    accept:()=>{
        this.newsService.deleteNewsGeneric(news)
        .subscribe(x=>{
            if(x.success){
               this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Usunięto!",""); 
               _.remove(this.newses,y=>(<News>y) == news);
            }
        })
    }})
}

private editNews(news :News){
    console.log(news);
}

private archiveNews(news : News){
    this.confirmationService.confirm({message:"Czy jesteś pewien, że chcesz przenieść wpis do archiwum?",
    accept:()=>{
        news.isArchived = true;
        this.newsService.updateNewsGeneric(news)
        .subscribe(x=>{
            if(x.success){
               this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Przeniesiono do archiwum!",""); 
               _.remove(this.newses,y=>(<News>y) == news);
            }
        })
    }})
}

}
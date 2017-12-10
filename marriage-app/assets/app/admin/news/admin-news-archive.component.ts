import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../news/news.service";
import { News } from "../../news/news.model";
import { MessageHelperService } from "../../common/messageHelper.service";
import { SeverityEnum } from "../../common/messageSeverity.enum";
import * as _ from "lodash";

@Component({
    selector:"admin-news-archive",
    templateUrl: "./admin-news-archive.component.html",
    styleUrls:["./admin-news-archive.component.css"]
})
export class AdminNewsArchiveComponent implements OnInit{

    private newses : News[];
    constructor(private newsService : NewsService, private messageHelperService : MessageHelperService){

    }

    ngOnInit(): void {
        this.newsService.getNewsesGeneric<News[]>({isArchived : true})
        .subscribe(resp=>{

            debugger;
            if(resp.success){
                this.newses = resp.Data
            }
        })
    }

    private restoreNews(news : News){
        news.isArchived = false;
        this.newsService.updateNewsGeneric(news)
        .subscribe(x=>{
            if(x.success){
                this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Wpis został przywrócony","");
                _.remove(this.newses,x=>x===news);
            }
        })
    }

    
}
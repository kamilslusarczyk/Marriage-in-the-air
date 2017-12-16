import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../news/news.service";
import { News } from "../../news/news.model";
import { MessageHelperService } from "../../common/messageHelper.service";
import { SeverityEnum } from "../../common/messageSeverity.enum";
import * as _ from "lodash";
import { ConfirmationService } from "primeng/components/common/confirmationservice";

@Component({
    selector:"admin-news-archive",
    templateUrl: "./admin-news-archive.component.html",
    styleUrls:["./admin-news-archive.component.css"]
})
export class AdminNewsArchiveComponent implements OnInit{

    private newses : News[];
    constructor(private newsService : NewsService, 
        private messageHelperService : MessageHelperService,
        private confirmationService : ConfirmationService){

    }

    ngOnInit(): void {
        this.newsService.getNewsesGeneric<News[]>({isArchived : true})
        .subscribe(resp=>{

            debugger;
            if(resp.success){
                this.newses = resp.data
            }
        })
    }

    private restoreNews(news : News){

        this.confirmationService.confirm({message:"Czy jesteś pewien, że chcesz przywrócić wpis?",
        accept:()=>{
            news.isArchived = false;
            this.newsService.updateNewsGeneric(news)
            .subscribe(x=>{
                if(x.success){
                    this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Wpis został przywrócony","");
                    _.remove(this.newses,x=>x===news);
                }
            })
        }})


    }

    
}
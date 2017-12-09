import { MessageHelperService } from '../../common/messageHelper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../news/news.service';
import { Component } from "@angular/core";
import { News } from '../../news/news.model';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SeverityEnum } from '../../common/messageSeverity.enum';

@Component({
    templateUrl:"./admin-news-add.component.html"
})
export class AdminNewsAddComponent{
    private addNewsFormGroup : FormGroup;

    constructor(private newsService : NewsService,
        private authService : AuthService,
        private messageService : MessageService,
        private messageHelperService : MessageHelperService) {

        this.addNewsFormGroup = new FormGroup({
            "topic" : new FormControl("",[Validators.required]),
            "content" : new FormControl("",[Validators.required])
        });
        
        
    }

    private addNews(): void{

        if(!this.addNewsFormGroup.valid){
            return;
        }
        debugger;
        let news = <News>this.addNewsFormGroup.value;
        news.dateOfPublication = new Date();
        news.userId = this.authService.getUserId();

        this.newsService.addNews(news)
        .subscribe(x=>{
            console.log(x);
            this.messageHelperService.addSingleMessage(SeverityEnum.Success,"News dodany!","")
            this.addNewsFormGroup.reset();
        })
    }
}